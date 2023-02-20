import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { CompareSorting } from "@forkfacts/icons";
import { ForLoops } from "@forkfacts/helpers";
import React, { useState } from "react";
import { DetailsNutritionTableProps } from "@forkfacts/models";

const DetailsNutritionTable: React.FC<DetailsNutritionTableProps> = ({ nutritionTableItems }) => {
  const theme = useTheme();
  const [collapsedRows, setCollapsedRows] = useState<any>([]);
  const toggleCollapse = (nutrient: any) => {
    if (collapsedRows.includes(nutrient)) {
      setCollapsedRows(collapsedRows.filter((row: any) => row !== nutrient));
    } else {
      setCollapsedRows([...collapsedRows, nutrient]);
    }
  };

  const isCollapsed = (nutrient: any) => collapsedRows.includes(nutrient);
  return (
    <Box>
      <TableContainer>
        <Table caria-label="nutrition table">
          <TableHead>
            <TableRow>
              <TableCell>Nutrient</TableCell>
              <TableCell>Daily Value</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>RDI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nutritionTableItems.map((item) => (
              <React.Fragment key={item.nutrient}>
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{ display: "flex", alignItems: "center", columnGap: theme.spacing(0.5) }}
                    >
                      {isCollapsed(item.nutrient) ? (
                        <ArrowDropUpIcon
                          onClick={() => toggleCollapse(item.nutrient)}
                          sx={{ cursor: "pointer" }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          onClick={() => toggleCollapse(item.nutrient)}
                          sx={{ cursor: "pointer" }}
                        />
                      )}
                      <Typography
                        sx={{ color: "#1C1B1F", fontWeight: theme.typography.fontWeightBold }}
                      >
                        {item.nutrient}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ color: "#1C1B1F", fontWeight: theme.typography.fontWeightBold }}
                    >
                      {item.dailyValue}%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ color: "#1C1B1F", fontWeight: theme.typography.fontWeightBold }}
                    >
                      {item.amount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{ color: "#1C1B1F", fontWeight: theme.typography.fontWeightBold }}
                    >
                      {`${item.rdi.value}${item.rdi.weight}`}
                    </Typography>
                  </TableCell>
                </TableRow>
                {!isCollapsed(item.nutrient) &&
                  item.nutrientContents.map((content) => (
                    <TableRow key={content.nutrient}>
                      <TableCell>{content.nutrient}</TableCell>
                      <TableCell>{content.dailyValue}%</TableCell>
                      <TableCell>{content.amount}</TableCell>
                      <TableCell>{`${content.rdi.value}${content.rdi.weight}`}</TableCell>
                    </TableRow>
                  ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailsNutritionTable;
