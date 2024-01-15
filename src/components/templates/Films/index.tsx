import { useFilmList } from "@/lib/hooks/useFilmList";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";

const Films = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<String>("Ascend");
  const [list, setList] = useState<any>([]);
  
  const pageSize = 50 ;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  useEffect(() => {
    setList(filmList?.data.movies || []);
  }, [filmList]);

  if (isLoading) {
    return null; // Return a loading indicator or some other UI element
  }

  const filmsList = list.map((film: any) => (
    <Film key={film.id} {...film}></Film>
  ));

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredList = filmList?.data.movies.filter((film: any) =>
      film.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setList(filteredList || []);
  };

  const changeSort = () => {
    if (sort === "Ascend") {
      list.sort(sortByAsc);
      setSort("Descend");
    } else {
      list.sort(sortByDesc);
      setSort("Ascend");
    }
  };

  function sortByAsc(a: any, b: any) {
    return b.rating - a.rating;
  }

  function sortByDesc(a: any, b: any) {
    return a.rating - b.rating;
  }

  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>Films</Style.Title>
        <div className="">
          <input onInput={filterList} />
        </div>

        <button onClick={changeSort}>{sort}</button>
        <Style.List>{filmsList}</Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;