import { Formik, Field, Form } from "formik";
import toast from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    if (!values.query) {
      toast.error("Please enter a search term.");
      return;
    }
    setQuery(values.query);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btnSearch}>
            <FcSearch size={30} className={css.icon} />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
