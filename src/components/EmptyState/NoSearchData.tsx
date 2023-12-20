export default function NoSearchResults() {
  return (
    <div className="shadow-lg bg-white flex max-w-[400px] flex-col items-center px-14 py-12 rounded-3xl">
      <header className="bg-white flex w-[250px] max-w-full flex-col justify-center items-center pl-12 pr-9 py-12">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8ba3c16-284a-448b-8d1b-8d04e2b91b3f?apiKey=d1f90749406b400da2bb63e5353ca29d&"
          className="aspect-[1.96] object-contain object-center w-full fill-sky-50 overflow-hidden mt-4"
          alt="Search Result"
        />
      </header>
      <div className="text-neutral-600 text-center text-xl font-bold self-stretch mt-1.5">
        <span className="font-bold"> No results found </span> <br />
        <span className="">
          {" "}
          Try adjusting your search <br /> to find what you are looking for{" "}
        </span>
      </div>
      <div className="shadow-sm bg-blue-600 self-stretch flex flex-col justify-center items-stretch mt-9 mb-1.5 rounded-3xl">
        <a
          href="#"
          className="text-white text-center text-lg font-bold whitespace-nowrap bg-blue-600 justify-center items-center px-16 py-5 rounded-3xl"
        >
          {" "}
          Search again{" "}
        </a>
      </div>
    </div>
  );
}
