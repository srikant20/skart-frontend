import { MagnifyingGlass } from "react-loader-spinner";

const Loader = (text) => {
    return (
        <div className="flext justify-center items-center w-full h-112.5">
            <div className="flex flex-col items-center gap-1">
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="magnifying-glass-loading"
                    wrapperStyle={{}}
                    wrapperClass="magnifying-glass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                />
                <p className="text-slate-800">{ text ? text : "Searching..." }</p>
            </div>
        </div>
    );
}

export default Loader;