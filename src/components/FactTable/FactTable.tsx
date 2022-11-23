import React from "react";
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridSortModel,
} from "@mui/x-data-grid";
import {Box, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((/*theme*/) => ({
    root: {
        "& .MuiDataGrid-columnsContainer": {
            backgroundColor: "black",
            color: "white",
        },
        "& .MuiDataGrid-sortIcon": {
            fill: "white",
        },
        "& .MuiDataGrid-columnSeparator": {
            backgroundColor: "black",
        },
        "& .MuiDataGrid-iconSeparator": {
            fill: "black",
        },
    },
}));

const getHeader = (name: string) => <Typography fontWeight={"bold"}>{name}</Typography>;
const columns: GridColDef[] = [
    {
        field: "nutrient",
        flex: 1,
        minWidth: 220,
        renderHeader: (/*params*/) => getHeader("Nutrient"),
        renderCell: (params: GridRenderCellParams) => {
            const row: FactTableRow = params.row as FactTableRow;
            return <Typography flexWrap={"wrap"}>{row.nutrient}</Typography>;
        },
    },
    {
        field: "dailyValue",
        width: 155,
        renderHeader: (/*params*/) => getHeader("% Daily Value"),
        renderCell: (params: GridRenderCellParams) => {
            const row: FactTableRow = params.row as FactTableRow;
            // todo: shall we move .toFixed(2) up?
            return (
                <Box sx={{display: 'flex'}} ml={4}>
                    <Typography>{row.dailyValue && <>{row.dailyValue.toFixed(2)} %</>}</Typography>
                </Box>
            );
        },
    },
    {
        field: "amount",
        width: 200,
        type: "number",
        sortable: false,
        renderHeader: (/*params*/) => getHeader("Amount (per 100g)"),
        renderCell: (params: GridRenderCellParams) => {
            const row: FactTableRow = params.row as FactTableRow;
            return (
                <Box sx={{display: 'flex'}}>
                    <Typography>{row.amount}</Typography>
                    <Typography pl={1}>{row.amountUnit === "ug" ? "µg" : row.amountUnit}</Typography>
                </Box>
            );
        },
    },
    {
        field: "rdi",
        width: 100,
        type: "number",
        sortable: false,
        renderHeader: (/*params*/) => getHeader("RDI"),
        renderCell: (params: GridRenderCellParams) => {
            const row: FactTableRow = params.row as FactTableRow;
            let rdiAmount =
                row?.rdiAmount && row?.rdiAmount > 0 ? row?.rdiAmount : "";
            let rdiUnit = rdiAmount
                ? row?.rdiUnit?.toLowerCase() === "ug"
                    ? "µg"
                    : row?.rdiUnit?.toLowerCase()
                : "";

            return row.rdiAmount ? (
                <Box sx={{display: 'flex'}}>
                    <Typography>{rdiAmount}</Typography>
                    <Typography pl={1}>{rdiUnit}</Typography>
                </Box>
            ) : null;
        },
    },
];

export interface FactTableRow {
    id: number;
    nutrient: string;
    amount: number;
    rdiAmount?: number;
    rdiUnit?: string;
    amountUnit: string;
    dailyValue?: number;
}

interface FactTableProps {
    rows: FactTableRow[];
    nutrientsFilterApplied?: boolean;
}

const FactTable = ({
                       rows,
                       nutrientsFilterApplied = false,
                   }: FactTableProps) => {

    // https://mui.com/components/data-grid/sorting/#basic-sorting
    const [sortModel, setSortModel] = React.useState<GridSortModel>([
        {
            field: "dailyValue",
            sort: "desc",
        },
    ]);

    return (
        <div style={{height: 500, width: "100%"}}>
            <div style={{display: "flex", height: "100%"}}>
                <div style={{flexGrow: 1}}>
                    <DataGrid
                        autoHeight={nutrientsFilterApplied}
                        rows={rows}
                        columns={columns}
                        //className={classes.root}
                        components={{
                            // https://mui.com/api/data-grid/data-grid/#slots-2
                            Footer: () => (
                                <Box py={4} pl={3}>
                                    <Typography fontSize={"xs"} color={"gray.700"}>
                                        {rows.length} Nutrients
                                    </Typography>
                                </Box>
                            ),
                        }}
                        sortModel={sortModel}
                        onSortModelChange={model => setSortModel(model)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FactTable;