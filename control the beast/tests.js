const { shallow } = require("enzyme");

let passedBeastName = "Leprechaun";
let typedBeastName = "Pixie";

describe(`Controlled Beast with the name ${passedBeastName} passed`, () => {
  const wrapper = shallow(<Beast name={passedBeastName} />);

  it(`should set the initial state to ${passedBeastName}`, () => {
    Test.assertEquals(wrapper.state("name"), passedBeastName);
  });

  it(`should change state when typing ${typedBeastName}`, () => {
    wrapper
      .find("#controlledName")
      .simulate("change", { target: { value: typedBeastName } });
    Test.assertEquals(wrapper.state("name"), typedBeastName);
  });
});
