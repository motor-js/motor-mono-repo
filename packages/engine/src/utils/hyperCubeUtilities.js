export const getFieldsFromDimensions = async (qDoc, dim) => {
  const Dim = dim
  const getDims = await qDoc.createSessionObject(
    {
      "qInfo": {
      "qType": "DimensionList",
      "qId": ""
      },
      "qDimensionListDef": {
      "qType": "dimension",
      "qData": {
      "title": "/qMetaDef/title",
      "tags": "/qMetaDef/tags",
      "grouping": "/qDim/qGrouping",
      "info": "/qDimInfos"
      }
      }
      }
  )
    const layout = await getDims.getLayout()
    const item = layout.qDimensionList.qItems.filter(function(item) {
      return item.qData.title === dim
    });
    
    return item
}

export function hyperCubeChartTransform(
  qData,
  qHyperCube,
  // useNumonFirstDim = false,
  cols
) {
  const qNoOfDiemnsions =
    qHyperCube !== undefined ? qHyperCube.qDimensionInfo.length : 1;
  const qNoOfMeasures =
    qHyperCube !== undefined ? qHyperCube.qMeasureInfo.length : 1;

  const measureNames = getMeasureNames(qHyperCube);
  const dimensionNames = getDimensionNames(qHyperCube);

  const transformedData = qData.qMatrix.map((d, i) => {
    let data = {};
    let attrExpItems = {};
    d.forEach((item, index) => {
      if (index < qNoOfDiemnsions) {
        const attrExp = d[index].qAttrExps;
        if (typeof attrExp !== "undefined") {
          const items = attrExp.qValues;

          items.forEach((qAttrExprInfoItem, itemIndex) => {
            if (qAttrExprInfoItem.qText !== undefined)
              attrExpItems[
                qHyperCube.qDimensionInfo[index].qAttrExprInfo[itemIndex].id
              ] =
                qAttrExprInfoItem.qNum !== "NaN"
                  ? qAttrExprInfoItem.qNum
                  : qAttrExprInfoItem.qText;
          });
        }
      } else {
        const attrExp = d[index].qAttrExps;
        if (typeof attrExp !== "undefined") {
          const items = attrExp.qValues;

          items.forEach((qAttrExprInfoItem, itemIndex) => {
            if (qAttrExprInfoItem.qText !== undefined)
              attrExpItems[
                qHyperCube.qMeasureInfo[index - -qNoOfDiemnsions].qAttrExprInfo[
                  itemIndex
                ].id
              ] =
                qAttrExprInfoItem.qNum !== "NaN"
                  ? qAttrExprInfoItem.qNum
                  : qAttrExprInfoItem.qText;
          });
        }
      }

      const pair =
        index < qNoOfDiemnsions
          ? {
              [dimensionNames[index]]: d[index].qText,
              [`elemNumber${index !== 0 ? index : ""}`]: d[index].qElemNumber,
              key: i,

              label: d[index].qText,
            }
          : {
              [measureNames[index - qNoOfDiemnsions]]:
                cols[index].qNumFormat ||
                cols[index].qNumType ||
                cols[index].qNumFmt
                  ? d[index].qText
                  : d[index].qNum !== "NaN"
                  ? d[index].qNum
                  : 0,
              key: i,
            };

      data = { ...data, ...pair, ...attrExpItems };
    });
    return data;
  });

  return transformedData;
}

export function hyperCubeTransform(
  qData,
  qHyperCube,
  // useNumonFirstDim = false,
  cols
) {
  const transformedData = qData.qMatrix.map((d, i) => {
    let data = {};
    d.forEach((item, index) => {
      const name = cols[index].dataKey;
      const pair = {
        [name]: {
          text: d[index].qText,
          number: d[index].qNum,
          elemNumber: d[index].qElemNumber,
          state: d[index].qState,
          attrExp: d[index].qAttrExps,
          columnId: index,
        },
        key: i,
      };
      data = { ...data, ...pair };
    });
    return data;
  });

  return transformedData;
}

export function multiDimHyperCubeTransform(qData, qHyperCube) {
  const qNoOfDimensions =
    qHyperCube !== undefined ? qHyperCube.qDimensionInfo.length : 1;

  const measureNames = getMeasureNames(qHyperCube);
  const dimensionNames = getDimensionNames(qHyperCube);

  let parentText = qData.qMatrix[0][0].qText;
  let transformedData = [];
  let series = {};

  qData.qMatrix.map((d, i) => {
    let key = null;
    let value = null;
    let elemNumber = null;

    d.forEach((item, index) => {
      if (index < qNoOfDimensions && index !== 0) {
        key = d[index].qText;
        elemNumber = d[index].qElemNumber;
      } else if (index !== 0) {
        value = d[index].qNum;
      }
    });

    if (parentText !== d[0].qText) {
      if (Object.keys(series).length === 0) {
        series[dimensionNames[0]] = d[0].qText;
        series["qElemNumber"] = d[0].qElemNumber;
        series[key] = value;
        series[`${key}-qElemNumber`] = elemNumber;
      }
      transformedData.push(series);
      series = {};
    } else {
      series[dimensionNames[0]] = d[0].qText;
      series["qElemNumber"] = d[0].qElemNumber;
      series[key] = value;
      series[`${key}-qElemNumber`] = elemNumber;
      series["label"] = d[0].qText;
    }
    parentText = d[0].qText;
  });
  transformedData.push(series);
  return transformedData;
}

export const getMeasureNames = (qHyperCube) =>
  qHyperCube.qMeasureInfo.map((d, i) => {
    const qMeasurePosition = i !== 0 ? i : "";

    return d.qFallbackTitle;
    /*.startsWith("=")
      ? `value${qMeasurePosition}`
      : d.qFallbackTitle;*/
  });

export const getDimensionNames = (qHyperCube) =>
  qHyperCube.qDimensionInfo.map((d, i) => d.qFallbackTitle);

export const getDimensionCategories = (data) => [
  ...new Set(
    Array.prototype.concat(
      ...data.map((d) => d[Object.keys(d)[2]].map((d) => d[Object.keys(d)[0]]))
    )
  ),
];

export const validData = (qLayout) => {
  let isValid = true;
  let dataError = "";
  const { qDimensionInfo, qMeasureInfo } =
    qLayout.qHyperCube || qLayout.qListObject;

  const DimCheck = () => {
    //check if an array, to work with HyperCube & ListObject
    let _qDimensionInfo = Array.isArray(qDimensionInfo)
      ? qDimensionInfo
      : [qDimensionInfo];
    _qDimensionInfo.forEach((qData) => {
        if (qData.qError) {
          console.error('There is an issue with your dimension. Please fix this in order to receive the correct data. ', qData.qError)
        }
    });
  };

  const MeasCheck = () => {
    qMeasureInfo.forEach((qData) => {
      if (
        (isNaN(qData.qMax) && isNaN(qData.qMin)) 
      ) {
        console.error('There is an issue with your measure. It is not returning any data.')
      }
    });
  };
  
  if (qDimensionInfo && qMeasureInfo) {
  //  DimCheck();
  //  MeasCheck();
  } else if (qDimensionInfo && !qMeasureInfo) {
  //  DimCheck();
  } else if (!qDimensionInfo && qMeasureInfo) {
  //  MeasCheck();
  } else { }

};

export const numericSortDirection = (sortDirection, defaultSetting = 0) => {
  let direction;
  switch (sortDirection.toUpperCase()) {
    case "ASC" || "ASCENDING":
      direction = 1;
      break;
    case "DESC" || "DESCENDING":
      direction = -1;
      break;
    default:
      direction = defaultSetting;
  }

  return direction;
};

export const orderCols = (cols) => {
  let dim = [];
  let meas = [];

  const getDims = (cols) => {
    cols
      .filter((col, i) => {
        const isDimension =
          (typeof col === "object" &&
            col.qLibraryId &&
            col.qType &&
            col.qType === "dimension") ||
          Array.isArray(col.qField) ||
          (typeof col === "object" && !col.qField.startsWith("="));

        return isDimension;
      })
      .map((col) => {
        dim.push(col);
        return col;
      });
  };

  const getMeas = (cols) => {
    cols
      .filter((col, i) => {
        const isMeasure =
          (typeof col === "object" &&
            col.qLibraryId &&
            col.qType &&
            col.qType === "measure") ||
          (typeof col === "object" &&
            !Array.isArray(col.qField) &&
            col.qField.startsWith("="));

        return isMeasure;
      })
      .map((col) => {
        meas.push(col);
        return col;
      });
  };

  //get dimensions
  getDims(cols);
  // get measures
  getMeas(cols);
  //concatenate dimensions and measures
  const orderedCols = dim.concat(meas);

  return orderedCols;
};

export const getHeader = (qLayout, cols, data) => {
  if (qLayout) {
    return [
      ...qLayout.qHyperCube.qDimensionInfo.map((col, index) => ({
        title: col.qFallbackTitle,
        dataIndex: cols[index].dataKey,
        dataKey: cols[index].dataKey,
        render: cols[index].render,
        defaultSortDesc: col.qSortIndicator === "D",
        qInterColumnIndex: index,
        qPath: `/qHyperCubeDef/qDimensions/${index}`,
        qSortIndicator: col.qSortIndicator,
        qReverseSort: col.qReverseSort,
        qGrandTotals: { qText: null, qNum: null },
        qColumnType: "dim",
      })),
      ...qLayout.qHyperCube.qMeasureInfo.map((col, index) => ({
        title: col.qFallbackTitle,
        dataIndex:
          cols[qLayout.qHyperCube.qDimensionInfo.length + index].dataKey,
        dataKey: cols[qLayout.qHyperCube.qDimensionInfo.length + index].dataKey,
        render: cols[qLayout.qHyperCube.qDimensionInfo.length + index].render,
        defaultSortDesc: col.qSortIndicator === "D",
        qInterColumnIndex: index + qLayout.qHyperCube.qDimensionInfo.length,
        qPath: `/qHyperCubeDef/qMeasures/${index}`,
        qSortIndicator: col.qSortIndicator,
        qReverseSort: col.qReverseSort,
        qGrandTotals: qLayout.qHyperCube.qGrandTotalRow[index],
        qColumnType: "meas",
      })),
    ];
  } else {
    return [];
  }
};

export default hyperCubeTransform;
