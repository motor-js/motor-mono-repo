export function hyperCubeTransform(
  qData,
  qHyperCube,
  useNumonFirstDim = false,
  cols
) {
  const qNoOfDimensions =
    qHyperCube !== undefined ? qHyperCube.qDimensionInfo.length : 1;
  const qNoOfMeasures =
    qHyperCube !== undefined ? qHyperCube.qMeasureInfo.length : 1;

  const measureNames = getMeasureNames(qHyperCube);
  const dimensionNames = getDimensionNames(qHyperCube);

  const transformedData = qData.qMatrix.map((d, i) => {
    let data = {};
    d.forEach((item, index) => {
      const pair =
        index < qNoOfDimensions
          ? 
          {
            [dimensionNames[index]]: {
              'value': d[index].qText === undefined
                ? "undefined"
                : index === 0 && useNumonFirstDim
                ? d[index].qNum
                : d[index].qText,
              'elemNumber': d[index].qElemNumber,
              'state': d[index].qState,
              'attrExp': d[index].qAttrExps,
            }
          } : {
            [measureNames[index - qNoOfDimensions]]: {
              'value': cols[index].useFormatting
                ? d[index].qText
                : d[index].qNum !== "NaN"
                ? d[index].qNum
                : 0,
              'state': d[index].qState,
              'attrExp': d[index].qAttrExps,
            },
            key: i,
          } 
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
    let qElemNumber = null;

    d.forEach((item, index) => {
      if (index < qNoOfDimensions && index !== 0) {
        key = d[index].qText;
        qElemNumber = d[index].qElemNumber;
      } else if (index !== 0) {
        value = d[index].qNum;
      }
    });

    if (parentText !== d[0].qText) {
      if (Object.keys(series).length === 0) {
        series[dimensionNames[0]] = d[0].qText;
        series["qElemNumber"] = d[0].qElemNumber;
        series[key] = value;
        series[`${key}-qElemNumber`] = qElemNumber;
      }
      transformedData.push(series);
      series = {};
    } else {
      series[dimensionNames[0]] = d[0].qText;
      series["qElemNumber"] = d[0].qElemNumber;
      series[key] = value;
      series[`${key}-qElemNumber`] = qElemNumber;
    }
    parentText = d[0].qText;
  });
  transformedData.push(series);
  return transformedData;
}

export const getMeasureNames = (qHyperCube) =>
  qHyperCube.qMeasureInfo.map((d, i) => {
    const qMeasurePosition = i !== 0 ? i : "";

    return d.qFallbackTitle.startsWith("=")
      ? `value${qMeasurePosition}`
      : d.qFallbackTitle;
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

export const validData = (qLayout, theme) => {
  let isValid = true;
  let dataError = "";
  const { qDimensionInfo, qMeasureInfo } =
    qLayout.qHyperCube || qLayout.qListObject;
  const { dimensionErrMsg, measureErrMsg } = theme.error
    ? theme.error
    : theme.global.chart.error;

    
  const DimCheck = () => {
    //check if an array, to work with HyperCube & ListObject
    let _qDimensionInfo = Array.isArray(qDimensionInfo)
      ? qDimensionInfo
      : [qDimensionInfo];
    _qDimensionInfo.forEach((qData) => {
      if (qData.qError) {
        isValid = false;
        dataError = dimensionErrMsg;
      }
    });
  };

  const MeasCheck = () => {
    qMeasureInfo.forEach((qData) => {
      // console.log('meas check: ',qData)
      /*if (
        (isNaN(qData.qMax) && isNaN(qData.qMin)) ||
        (qData.qMax === 0 && qData.qMin === 0)
      ) {
        isValid = false;
        dataError = measureErrMsg;
      }*/
    });
  };

  if (qDimensionInfo && qMeasureInfo) {
    DimCheck();
    MeasCheck();
  } else if (qDimensionInfo && !qMeasureInfo) {
    DimCheck();
  } else if (!qDimensionInfo && qMeasureInfo) {
    MeasCheck();
  } else {
  }

  return { isValid, dataError };
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

export const getHeader = (qLayout, cols) =>
  qLayout
    ? [
        ...qLayout.qHyperCube.qDimensionInfo.map((col, index) => ({
          title: col.qFallbackTitle,
          dataIndex: col.qFallbackTitle,
          defaultSortDesc: col.qSortIndicator === "D",
          qInterColumnIndex: index,
          qSortIndicator: col.qSortIndicator,
          qReverseSort: col.qReverseSort,
          qGrandTotals: { qText: null, qNum: null },
          qColumnType: "dim",
        })),
        ...qLayout.qHyperCube.qMeasureInfo.map((col, index) => ({
          title: col.qFallbackTitle,
          dataIndex: col.qFallbackTitle,
          defaultSortDesc: col.qSortIndicator === "D",
          qInterColumnIndex: index + qLayout.qHyperCube.qDimensionInfo.length,
          qSortIndicator: col.qSortIndicator,
          qReverseSort: col.qReverseSort,
          qGrandTotals: qLayout.qHyperCube.qGrandTotalRow[index],
          qColumnType: "meas",
        })),
      ]
    : [];

//Change order of header groups
export const getOrder = (headerGroup, qColumnOrder) => {
  const orderedHeader = headerGroup.sort(
    (a, b) =>
      qColumnOrder.indexOf(a.qInterColumnIndex) -
      qColumnOrder.indexOf(b.qInterColumnIndex)
  );
  return orderedHeader;
};

export default hyperCubeTransform;
