function createDef(
  cols,
  qTitle,
  qHyperCubeDef,
  qSortByAscii,
  qSortByLoadOrder,
  qInterColumnSortOrder,
  qSuppressZero,
  qSortByNumeric,
  qSortByExpression,
  qSuppressMissing,
  qExpression,
  qColumnOrder,
  qCalcCondition,
  qOtherTotalSpec,
  totalSpec
) {
  const qProp = {
    qInfo: { qType: "visualization" },
  };

  if (qHyperCubeDef) {
    const _qHyperCubeDef = qHyperCubeDef;
    if (cols && cols[1]) {
      _qHyperCubeDef.qMeasures[0].qDef = {
        qDef: cols[1],
      };
    }
    if (cols && cols[0])
      _qHyperCubeDef.qDimensions[0].qDef.qFieldDefs = [cols[0]];
    qProp.qInfo.qType = "HyperCube";
    qProp.qHyperCubeDef = _qHyperCubeDef;

    return qProp;
  }
  const myqInterColumnSortOrder = qInterColumnSortOrder || [];
  const qInterColumnSortOrderSet = !!qInterColumnSortOrder;
  let sortIndex = 0;

  const qDimensions = cols
    .filter((col, i) => {
      const isDimension =
        (typeof col === "string" && !col.startsWith("=")) ||
        (typeof col === "object" && col.qDef && col.qDef.qFieldDefs) ||
        (typeof col === "object" &&
          col.qLibraryId &&
          col.qType &&
          col.qType === "dimension") ||
        (typeof col === "object" && !col.qField.startsWith("="));

      if (isDimension && !qInterColumnSortOrderSet) {
        myqInterColumnSortOrder[i] = sortIndex;
        sortIndex += 1;
      }

      return isDimension;
    })
    .map((col) => {
      if (typeof col === "string") {
        return {
          qDef: {
            qFieldDefs: [col],
            qSortCriterias: [
              {
                qSortByExpression: -1,
                qExpression: {qv: "Sum(Sales)" }
              }
            //  {
            //    qSortByAscii,
            //    qSortByLoadOrder,
            //  },
            ],
          },
          qNullSuppression: true,
          qSuppressMissing: true,
          qShowTotalsAbove: true,
        };
      }
      if (typeof col === "object" && !col.qLibraryId) {
        return {
          qDef: {
            qFieldDefs: [col.qField],
            qFieldLabels: [col.qLabel],
            qSortCriterias: col.qSortCriterias
              ? [col.qSortCriterias]
              : [
                  {
                    qSortByLoadOrder,
                    qSortByAscii,
                  },
                ],
          },
          qOtherTotalSpec: totalSpec,
          qOtherLabel:
            qOtherTotalSpec !== undefined
              ? qOtherTotalSpec.qOtherLabel
              : "Others",
          qAttributeExpressions: [
            {
              // cell background color
              qExpression: col.qCondBackgroundFormat,
              qLibraryId: "",
              qAttribute: false,
              id: "cellBackgroundColor",
            },
            {
              // cell text color
              qExpression: col.qCondTextFormat,
              qLibraryId: "",
              qAttribute: false,
              id: "cellForegroundColor",
            },
            {
              // chart fill color
              qExpression: col.qCondChartColor,
              qLibraryId: "",
              qAttribute: false,
              id: "colorTheme",
            },
          ],
          qNullSuppression: col.qNullSuppression ? col.qNullSuppression : true,
          qSuppressMissing: true,
          qShowTotalsAbove: true,
        };
      }
      if (typeof col === "object" && col.qLibraryId) {
        return {
          qLibraryId: col.qLibraryId,
          qType: col.qType,
          qOtherTotalSpec: totalSpec,
          qOtherLabel:
            qOtherTotalSpec !== undefined
              ? qOtherTotalSpec.qOtherLabel
              : "Others",
          qAttributeExpressions: [
            {
              // cell background color
              qExpression: col.qCondBackgroundFormat,
              qLibraryId: "",
              qAttribute: false,
              id: "cellBackgroundColor",
            },
            {
              // cell text color
              qExpression: col.qCondTextFormat,
              qLibraryId: "",
              qAttribute: false,
              id: "cellForegroundColor",
            },
            {
              // chart fill color
              qExpression: col.qCondChartColor,
              qLibraryId: "",
              qAttribute: false,
              id: "colorTheme",
            },
          ],
          qNullSuppression: col.qNullSuppression ? col.qNullSuppression : true,
          qSuppressMissing: true,
          qShowTotalsAbove: true,
        };
      }

      return col;
    });

  const qMeasures = cols
    .filter((col, i) => {
      const isMeasure =
        (typeof col === "string" && col.startsWith("=")) ||
        (typeof col === "object" && col.qDef && col.qDef.qDef) ||
        (typeof col === "object" &&
          col.qLibraryId &&
          col.qType &&
          col.qType === "measure") ||
        (typeof col === "object" && col.qField.startsWith("="));
      if (isMeasure && !qInterColumnSortOrderSet) {
        myqInterColumnSortOrder[i] = sortIndex;
        sortIndex += 1;
      }

      return isMeasure;
    })
    .map((col) => {
      if (typeof col === "string") {
        return {
          qDef: {
            qDef: col,
            qNumFormat: col.qNumFormat,
          },
          qSortBy: {
            qSortByNumeric,
            qSortByExpression,
            qExpression,
            qSuppressMissing,
          },
        };
      }
      if (typeof col === "object") {
        return {
          qDef: {
            qDef: col.qField,
            qLabel: col.qLabel,
            qNumFormat: {
              qType: col.qNumType || "U",
              qUseThou: 1,
              qFmt: col.qNumFmt,
              qDec: ".",
              qThou: ",",
            },
          },
          qSortBy: {
            qSortByNumeric,
            qSortByExpression,
            qExpression,
            qSuppressMissing,
          },
          qAttributeExpressions: [
            {
              // cell background color
              qExpression: col.qCondBackgroundFormat,
              qLibraryId: "",
              qAttribute: false,
              id: "cellBackgroundColor",
            },
            {
              // cell text color
              qExpression: col.qCondTextFormat,
              qLibraryId: "",
              qAttribute: false,
              id: "cellForegroundColor",
            },
            {
              // chart fill color
              qExpression: col.qCondChartColor,
              qLibraryId: "",
              qAttribute: false,
              id: "colorTheme",
            },
          ],
          qChartType: col.qChartType,
          qShowPoints: col.qShowPoints,
          qCurve: col.qCurve,
          qFillStyle: col.qFillStyle,
          qLegendShape: col.qLegendShape,
        };
      }

      return col;
    });

  qProp.qHyperCubeDef = {
    qDimensions,
    qMeasures,
    qInterColumnSortOrder,
    qSuppressZero,
    qSuppressMissing,
    qColumnOrder,
    qCalcCondition,
    qTitle,
  };

  return qProp;
}

export default createDef;
