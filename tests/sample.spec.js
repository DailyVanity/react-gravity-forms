// import { render, toJSON } from "@testing-library/react";
import renderer from 'react-test-renderer';
import * as React from "react";
import GravityForm from "../src";
// jest.useFakeTimers()

it("should render the form", async () => {
  const component = renderer.create(
    <GravityForm
      backendUrl={`https://backend.glamrock.dev.gohike.nl/wp/wp-json/glamrock/v1/gf/forms`}
      formID={"1"}
      title={"titel"}
      // onChange={onChange}
      // populatedFields={searchParams}
      // styledComponents={{
      //   Label,
      //   Input,
      //   Textarea,
      //   Checkbox,
      //   Radiogroup,
      //   GFWrapper,
      //   FileWrapper,
      //   Consent,
      //   Button,
      // }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseEnter();
  // });
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave();
  // });
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
