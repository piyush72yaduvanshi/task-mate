const SortDropdown = ({ sortBy, onSortChange }) => {
    return (
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="p-2 border rounded">
        <option value="">Sort By</option>
        <option value="dueDate">Due Date</option>
        <option value="createdAt">Created Date</option>
        <option value="status">Completion Status</option>
      </select>
    );
  };
  
  export default SortDropdown;
  