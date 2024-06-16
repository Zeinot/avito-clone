import InputCustom from "./InputCustom";
import SearchBtn from "./SearchBtn";
import SelectCustom from "./SelectCustom";

export default function SearchBar() {
  return (
    <>
      <div className="flex gap-5">
        <div className="flex flex-col w-full">
          <InputCustom />
        </div>
        <div className="flex flex-col w-full">
          {/* pass the data later */}
          <SelectCustom SelectTitle="Location" />
        </div>
        <div className="flex flex-col w-full">
          {/* pass the data later */}
          <SelectCustom SelectTitle="Category" />
        </div>
        <div className="flex flex-col-reverse">
          <SearchBtn />
        </div>
        <hr />
      </div>
    </>
  );
}
