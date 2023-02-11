export default function SearchBox(props: any) {
  const { query, setSearchQuery } = props;

  return (
    <input
      type="text"
      autoFocus
      className="form-control search"
      value={query}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search"
    />
  );
}
