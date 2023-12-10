import { useBoolean, useString } from "@app/helpers/hooks";
import DoctorCard from "@app/pages/doctor/DoctorCard";
import { Select, Option, Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import SearchInput from "@app/components/Input/SearchInput";
import { useEffect, useState } from "react";
import {
  DoctorDetail,
  DoctorFilter,
  defaultDoctorDetail,
} from "@app/pages/doctor/types";
import { City, Distrist, Ward } from "../auth/types";
import { getDoctorsMiddleware } from "@app/pages/doctor/services/api";
import { MESSAGE } from "@app/constants/message";
import DoctorModal from "@app/pages/doctor/DoctorModal";
import { VIETNAM_PROVINCES } from "@app/constants/provinces";
import StickyNavbar from "./Navbar";
const PublicDoctors = () => {
  const openModal = useBoolean();
  const [doctors, setDoctors] = useState<DoctorDetail[]>([]);

  const [selectedDoctor, setSelectedDoctor] =
    useState<DoctorDetail>(defaultDoctorDetail);
  const search = useString();
  const [city, setCity] = useState<City | undefined>();
  const [district, setDistrict] = useState<Distrist | undefined>();
  const [ward, setWard] = useState<Ward | undefined>();

  useEffect(() => {
    getDoctors();
  }, [district, ward, city]);

  const getDoctorFilter = () => {
    const address = `${ward ? ward.name + "," : ""}${
      district ? district.name + "," : ""
    }${city ? city.name : ""}`;
    const filter: DoctorFilter = {
      search: search.value,
      address,
      startTime: "",
      endTime: "",
    };
    return filter;
  };
  const getDoctors = () => {
    const filter = getDoctorFilter();
    getDoctorsMiddleware(filter)
      .then((res) => {
        setDoctors(res.items);
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data.message || MESSAGE.COMMON_ERROR}
          />
        );
      });
  };

  const onRemoveSearch = () => {
    search.setValue("");
    getDoctors();
  };
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    search.setValue(e.target.value);
  };
  const onPressEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getDoctors();
    }
  };
  const onResetFilter = () => {
    setCity(undefined);
    setDistrict(undefined);
    setWard(undefined);
  };
  return (
    <>
      <div className="px-6">
        <StickyNavbar />
      </div>
      <div className="flex flex-col px-6 gap-5">
        {/* header */}
        <div className="flex justify-between pt-4">
          <div className="flex items-center justify-between">
            <SearchInput
              onRemoveSearch={onRemoveSearch}
              onChange={onChangeSearchInput}
              value={search.value}
              onKeyPress={onPressEnterSearch}
            />
          </div>
          {/* filter */}
          <div className="flex gap-2 h-full">
            <Select
              className="z-[10000]"
              label="Select city"
              value={city?.name}
              key={"Select city"}
              color="gray"
              onChange={(value) => {
                setCity(
                  VIETNAM_PROVINCES.find((city) => city.name === value) as any
                );
                setDistrict(undefined);
                setWard(undefined);
              }}
            >
              {VIETNAM_PROVINCES.map((city) => {
                return (
                  <Option key={city.name} value={city.name}>
                    {city.name}
                  </Option>
                );
              })}
            </Select>
            <Select
              label="Select district"
              value={district?.name}
              key={district?.name}
              color="gray"
              onChange={(value) => {
                setDistrict(
                  city?.districts.find((district) => district.name === value)
                );
                setWard(undefined);
              }}
            >
              {city ? (
                city.districts.map((district) => {
                  return <Option value={district.name}>{district.name}</Option>;
                })
              ) : (
                <div></div>
              )}
            </Select>
            <Select
              label="Select ward"
              color="gray"
              value={ward?.name}
              key={ward?.name}
              onChange={(value) => {
                setWard(district?.wards.find((ward) => ward.name === value));
              }}
            >
              {district ? (
                district?.wards.map((ward) => {
                  return <Option value={ward.name}>{ward.name}</Option>;
                })
              ) : (
                <div></div>
              )}
            </Select>
            <Button
              variant="outlined"
              className="w-full h-10"
              onClick={onResetFilter}
            >
              Reset filter
            </Button>
          </div>
        </div>
        {/* body */}
        <div className="grid grid-cols-auto-fill-min-350 gap-6 my-1">
          {doctors.map((doctor) => {
            return (
              <DoctorCard
                key={doctor.id}
                doctorDetail={doctor}
                onViewMore={() => {
                  openModal.setValue(true);
                  setSelectedDoctor(doctor);
                }}
              />
            );
          })}
        </div>
        <DoctorModal openModal={openModal} doctorDetail={selectedDoctor} />
      </div>
    </>
  );
};
export default PublicDoctors;
