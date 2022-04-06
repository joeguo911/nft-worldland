const SearchIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.5583 16.8083C13.3884 17.5624 11.9953 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.0619 17.5226 13.5122 16.7057 14.7131L20.5607 18.568C21.1464 19.1538 21.1464 20.1036 20.5607 20.6893C19.9749 21.2751 19.0251 21.2751 18.4393 20.6893L14.5607 16.8107C14.5599 16.8099 14.5591 16.8091 14.5583 16.8083Z" fill="#1199FA"/>
      </svg>
    )
}
export const SearchBar = () => {
  return (
    <div className='searchBar'>
      <SearchIcon />
      <input placeholder="Search collectibles and collections"/>
    </div>
  )
}