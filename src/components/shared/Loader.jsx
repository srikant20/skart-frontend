import { MagnifyingGlass } from "react-loader-spinner";

const Loader = ({
  text = "Searching...",
  size = 80,
  className = "",
  showText = true,
  variant = "default",
}) => {
  const variants = {
    default: { glassColor: "#c0efff", color: "#e15b64", textColor: "text-slate-600" },
    subtle: { glassColor: "#e2e8f0", color: "#64748b", textColor: "text-slate-500" },
    prominent: { glassColor: "#bae6fd", color: "#f43f5e", textColor: "text-slate-700" },
  };

  const current = variants[variant] || variants.default;

  return (
    <div
      className={`flex justify-center items-center w-full min-h-[300px] ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <MagnifyingGlass
          visible={true}
          height={size}
          width={size}
          ariaLabel="loading"
          glassColor={current.glassColor}
          color={current.color}
          wrapperClass="drop-shadow-sm"
        />

        {showText && (
          <p className={`${current.textColor} font-medium text-sm tracking-wide animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Loader;