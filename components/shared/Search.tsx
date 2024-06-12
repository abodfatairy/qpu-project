"use client";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }, 2000);
  return (
    <div className='flex items-center justify-center'>
      <button className=' cursor-pointer'>
        <Input
          className=' outline-none border-none rounded-r-none  focus-visible:ring-0 cursor-pointer  '
          placeholder='Search . . .'
          defaultValue={searchParams.get("search")?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value.toLowerCase());
          }}
        />
      </button>
      <CiSearch className=' bg-main-6 rounded-l-none border-l border-main-1  text-2xl px-1 rounded-md h-10' />
    </div>
  );
};

export default Search;
