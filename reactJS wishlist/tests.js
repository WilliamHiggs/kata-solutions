const { shallow } = require("enzyme");

describe("Santa wish-list form", () => {

  let form;

  before(() => {
    form = shallow(
      <WishlistForm />
    );
  });

  it("has an initial state containing name, wish and priority", () => {
    Test.assertEquals(form.state('name'), '');
    Test.assertEquals(form.state('wish'), '');
    Test.assertEquals(form.state('priority'), 1);
  });

  it("has an text area with id 'wish'", () => {
    let wishInput = form.find('#wish');
    Test.assertEquals(wishInput.length, 1);
    Test.assertEquals(wishInput.type(), 'textarea');
  });

  it('should change state when entering Peter as name', () => {
    form.find("#name")
      .simulate("change", { target: { value: "Peter" } });
    Test.assertEquals(form.state("name"), "Peter");
  });

});
