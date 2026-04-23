import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCcw, FiSearch } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  Button
} from "@mui/material";


const Filter = () => {
    const categories = [
        { categoryId: 1, categoryName: "Electronics"},
        { categoryId: 2, categoryName: "Clothing"},
        { categoryId: 3, categoryName: "Furniture"},
        { categoryId: 4, categoryName: "Books"},
        { categoryId: 5, categoryName: "Toys"},
    ];

    useSearchParams();
    useLocation();
    useNavigate();

    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() =>{
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = searchParams.get("sortby") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";

        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    },[searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if(searchTerm){
                searchParams.set("keyword", searchTerm);
            }else{
                searchParams.delete("keyword");
            }
            navigate(`${pathname}?${searchParams.toString()}`);
        }, 700);

        return () => {
            clearTimeout(handler);
        }
    }, [searchParams, searchTerm, navigate, pathname]);

    const handleCategoryChange = (event) =>{

        const selectedCategory = event.target.value;

        if(selectedCategory === "all"){
            params.delete("category");
        }else{
            params.set("category", selectedCategory);
        }
        navigate(`${pathname}?${params}`);
        setCategory(event.target.value);
    };

    const toggleSortOrder = () =>{
        setSortOrder ((prevOrder) =>{
            const newOrder = (prevOrder === "asc") ? "desc" : "asc";
            params.set("sortby", newOrder);
            navigate(`${pathname}?${params}`);
            return newOrder;
        })
    }

    const handleClearFilter = () =>{
        navigate({pathname: window.location.pathname});
    }

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        
        {/* Search Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products"
          className="w-full border border-gray-400 text-slate-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none"
        />

        {/* Search Icon */}
        <FiSearch
          className="absolute left-3 text-slate-500"
          size={20}
        />
      </div>

      {/*  Category List */}

       <div className="flex sm:flex-row flex-col gap-4 items-center">

      <FormControl size="small" className="min-w-[180px]">
        <InputLabel id="category-select-label">
          Category
        </InputLabel>

        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
          label="Category"
          className="min-w-30"
        >
          <MenuItem value="all">All</MenuItem>
          {categories.map((item) => (
              <MenuItem key={item.categoryId} value= {item.categoryName}>
                {item.categoryName}
                </MenuItem>
          )
        )}
        </Select>

      </FormControl>

      {/* Sort and Clear Filter */}

    <Tooltip title="Sorted by price: asc">
        <Button onClick={toggleSortOrder} variant="contained" color="primary" className="flex items-center gep-2 h-10">
            Sort By
            {sortOrder === "asc"? (
                <FiArrowUp size={20}/>) : ( 
                <FiArrowDown size={20}/>)
            }            
        </Button>
    </Tooltip>
        <button onClick={handleClearFilter} className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none">
            <FiRefreshCcw className="font-semibold " size = {16} />
            <span className="font-semibold ">Clear Filter</span>
        </button>

    </div>

    </div>
    );
};

export default Filter;