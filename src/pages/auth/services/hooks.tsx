import { useState } from "react";
import { City, Distrist, Ward } from "../types";
import { VIETNAM_PROVINCES } from "@app/constants/provinces";

export const useSelectAddress = () => {
  const [city, setCity] = useState<City | undefined>();
  const [district, setDistrict] = useState<Distrist | undefined>();
  const [ward, setWard] = useState<Ward | undefined>();

  const onchangeCity = (value: string | undefined) => {
    setCity(VIETNAM_PROVINCES.find((city) => city.name === value) as any);
    setDistrict(undefined);
    setWard(undefined);
  };
  const onChangeDistrict = (
    value: string | undefined,
    defaultValue?: Distrist | undefined
  ) => {
    setDistrict(
      defaultValue ||
        city?.districts.find((district) => district.name === value)
    );
    setWard(undefined);
  };
  const onChangeWard = (
    value: string | undefined,
    defaultValue?: Ward | undefined
  ) => {
    setWard(
      defaultValue || district?.wards.find((ward) => ward.name === value)
    );
  };

  return { city, district, ward, onchangeCity, onChangeDistrict, onChangeWard };
};
