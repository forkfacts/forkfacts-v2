import { SEO } from "@forkfacts/components";
import { RecommendedDailyIntake } from "@forkfacts/screens";
import { Box } from "@mui/material";
import { RdiAge, RdiNutritionTableRow } from "@forkfacts/models";
import { menuItems, lifeStageItems, rdiAges } from "../../RealData/realData";
import {
  getAgeRangesForLifeStage,
  getFilterNutrients,
  setSelectedAgeByGender,
} from "@forkfacts/helpers";
import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";

interface NutrientRequirement {
  applicableFor: string;
  ageStart: number;
  ageEnd: number | null;
  ageUnit: string;
  importTable: string;
  nutrient: string;
  amount: number;
  nutrientUnit: string;
  nutrientGroup: string;
}

interface Props {
  pageContext: {
    recommendedDailyIntakes: NutrientRequirement[];
    seo: {
      title: string;
      description: string;
    };
  };
}

const RecommendedDailyIntakePage: React.FC<Props> = ({ pageContext }) => {
  const { recommendedDailyIntakes, seo } = pageContext;
  const [selectedAge, setSelectedAge] = useState<RdiAge>({} as RdiAge);
  const [selectedGender, setSelectedGender] = useState("");
  const { selectedNutrients } = useStore((state) => state);
  const [staticRows, setStaticRows] = useState<RdiNutritionTableRow[]>([]);
  const [isOpenRdiTable, setIsOpenRdiTable] = useState(false);
  const [rows, setRows] = useState<RdiNutritionTableRow[]>([]);
  useEffect(() => {
    setSelectedAgeByGender(selectedGender, setSelectedAge);
  }, [selectedGender, setSelectedAge]);

  const ageRanges = getAgeRangesForLifeStage(selectedGender);

  useEffect(() => {
    if (!selectedNutrients.length) {
      const filteredRows: NutrientRequirement[] = recommendedDailyIntakes.filter((nutrient) => {
        if (
          nutrient.ageStart === selectedAge.start &&
          (nutrient.ageEnd === selectedAge.end || nutrient.ageEnd === null) &&
          nutrient.ageUnit.toLowerCase() === selectedAge.ageUnit.toLowerCase() &&
          nutrient.applicableFor.toLowerCase() ===
            (selectedGender.toLowerCase() === "Pregnant".toLowerCase()
              ? "pregnancy"
              : selectedGender.toLowerCase())
        ) {
          return nutrient;
        }
        return false;
      });

      const mappedRows: RdiNutritionTableRow[] = filteredRows.map((nutrient) => {
        return {
          nutrient: nutrient.nutrient,
          recommendedAmount: Math.abs(nutrient.amount),
          recommendedUnit: nutrient.nutrientUnit,
          nutrientGroup: nutrient.nutrientGroup,
        };
      });
      setRows(mappedRows);
      setStaticRows(mappedRows);
    } else {
      const data: any = getFilterNutrients(selectedNutrients)
        .map((filteredNutrient) => {
          const nutrientWithRdi = staticRows.filter((item) => {
            if (item.nutrient === filteredNutrient?.name) {
              return item;
            }
          });
          return nutrientWithRdi;
        })
        .flat();
      setRows([...data]);
    }
  }, [selectedAge, selectedGender, selectedNutrients]);

  const rowsByNutrientGroup = staticRows?.reduce((acc, row) => {
    const nutrientGroup = row?.nutrientGroup || "Others";
    if (!acc.has(nutrientGroup)) {
      acc.set(nutrientGroup, [row]);
      return acc;
    }
    acc.set(nutrientGroup, [...(acc.get(nutrientGroup) as RdiNutritionTableRow[]), row]);
    return acc;
  }, new Map<string, RdiNutritionTableRow[]>());

  const rowsByNutrientGroupArray = Array.from(
    rowsByNutrientGroup.entries(),
    ([nutrientGroup, rows]) => ({
      nutrientGroup,
      rows,
    })
  );

  const nutritionFilters: any[] =
    rowsByNutrientGroupArray
      .filter((item: any) => item.nutrientGroup !== "")
      .map((item) => {
        return {
          checked: false,
          nutrientGroup: item.nutrientGroup,
          name: item.nutrientGroup,
          rows: item?.rows?.map((row) => {
            return {
              checked: false,
              name: row.nutrient,
            };
          }),
        };
      }) || [];

  const onOpenRdiTable = (): void => {
    setIsOpenRdiTable(true);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Box>
      <SEO title={seo.title} description={seo.description} />
      <RecommendedDailyIntake
        menuItems={menuItems}
        isOpenRdiTable={isOpenRdiTable}
        setIsOpenRdiTable={setIsOpenRdiTable}
        onOpenRdiTable={onOpenRdiTable}
        nutritionFilters={nutritionFilters}
        genders={lifeStageItems}
        setSelectedAge={setSelectedAge}
        selectedAge={selectedAge}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        ages={selectedGender ? ageRanges : rdiAges}
        rows={rows}
        totalRdiNutrients={staticRows.length}
      />
    </Box>
  );
};

export default RecommendedDailyIntakePage;
