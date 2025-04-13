const SearchBar = ({ search, onSearchChange }) => (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
  
  export default SearchBar;
  