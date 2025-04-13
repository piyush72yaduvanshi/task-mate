const FilterDropdown = ({ category, onCategoryChange }) => {
    const categories = ['Work', 'Personal', 'Study', 'Other'];
  
    return (
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)} className="p-2 border rounded">
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    );
  };
  
  export default FilterDropdown;
  