import Form from "next/form";
import ResetButton from "./ResetButton";
import Link from "next/link";
import { Search } from "lucide-react";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <ResetButton />}
        <button type="submit" className="search-btn">
          <Search className="size-5" color="white"/>
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
