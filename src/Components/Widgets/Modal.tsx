import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent } from "react";
import { CategoryAction } from "../../store/interface";
import { dataTypes } from "../../store/types";
import DropDownField from "./DropDownField";
import SubmitButton from "./Buttons/SubmitButton";
import LoadingAnimation from "./loadingAnimation";
import ReactDOM from "react-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export interface AddPostModalProps {
  fetchCollection: (url: string, dataTypes: dataTypes.category) => Promise<any>;
  title: string;
  category: CategoryAction[];
  handleSubmit: (categoryId?: string) => void;
  addData: <CategoryAction>(
    data: CategoryAction,
    url: string,
    dataTypes: dataTypes.category
  ) => Promise<any>;
}

export interface AddPostModalState {}

class AddPostModal extends React.Component<
  AddPostModalProps,
  AddPostModalState
> {
  state = {
    chosenValue: "",
    newCategory: "",
    error: "",
    loading: false,
  };

  componentDidMount() {
    this.props.fetchCollection("categories", dataTypes.category);
  }

  componentDidUpdate(prevProps: AddPostModalProps) {
    if (
      prevProps.category !== this.props.category &&
      this.props.category.length > 0
    ) {
      this.setState({ chosenValue: this.props.category[0].name });
    }
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (this.state.newCategory) {
      //check if it same as others
      const result = this.props.category.find(
        (categ) =>
          categ.name.toLowerCase() === this.state.newCategory.toLowerCase()
      );
      if (result) {
        console.log(result);

        return this.setState({ error: "Category already exists!" });
      }
      //error if its same
      //add the category
      const newCategory = { name: this.state.newCategory } as CategoryAction;
      this.props.addData(newCategory, "categories", dataTypes.category);
      this.setState({
        newCategory: "",
      });
      return this.props.fetchCollection("categories", dataTypes.category);
    }

    this.props.handleSubmit(
      this.props.category.find(
        (item) =>
          item.name.toLowerCase() === this.state.chosenValue.toLowerCase()
      )?.id as string
    );
  };

  render() {
    return ReactDOM.createPortal(
      <AnimatePresence>
        <motion.div
          className="fixed bg-black bg-opacity-25 z-50 w-screen h-screen flex flex-col justify-center items-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <div className=" bg-white border rounded-lg border-primary  p-6 ">
            <p
              className="text-right text-red-700 cursor-pointer text-lg p-2"
              onClick={() => this.props.handleSubmit()}
            >
              X
            </p>
            <h4 className="text-center text-lg mb-10">{this.props.title}</h4>

            <form onSubmit={this.handleSubmit}>
              <DropDownField
                chosenValue={this.state.chosenValue}
                list={this.props.category}
                handleChange={this.handleChange}
              />
              <h5 className="text-center  mt-6"> - Or -</h5>
              <NewCategory
                value={this.state.newCategory}
                error={this.state.error}
                onChange={this.handleChange}
              />

              <div className="text-center block w-full mt-10">
                <SubmitButton
                  loading={this.state.loading}
                  label="Add Category"
                />

                <LoadingAnimation loading={this.state.loading} />
              </div>
            </form>
          </div>
        </motion.div>
      </AnimatePresence>,

      document.getElementById("modal") as Element
    );
  }
}
const NewCategory = (props) => {
  return (
    <div className="md:flex md:items-center mt-6">
      <div className="md:w-1/3">
        <label
          htmlFor={"newCategory"}
          className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
        >
          {"Add a new category"}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          name={"newCategory"}
          value={props.value}
          onChange={props.onChange}
        />
        <p className="text-negative text-xs italic">{props.error}</p>
      </div>
    </div>
  );
};

export default AddPostModal;
