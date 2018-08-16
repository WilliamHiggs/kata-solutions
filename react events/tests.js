function executeRender(jsx){
  const renderer = new ShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

const enzyme = require('enzyme');

describe("Counter", () => {
  it('shows inital counter value', () => {
    const wrapper = enzyme.shallow(<Counter />)
    const counterDisplayed = wrapper.find('#counter').node.props.children
    Test.assertEquals(counterDisplayed, 0);
  })
  
  it('should have an initial value of 0', () => {
    const wrapper = enzyme.shallow(<Counter />)
    Test.assertEquals(wrapper.state('counter'), 0);
  })
  
  it("Increments counter by 1 when increment button is clicked", () => {
    const wrapper = enzyme.shallow(<Counter />)
    wrapper.find('#increment').simulate('click');
    Test.assertEquals(wrapper.state('counter'), 1);
  })
  
  it("Decrements counter by 1 when decrement button is clicked", () => {
    const wrapper = enzyme.shallow(<Counter />)
    wrapper.find('#decrement').simulate('click');
    Test.assertEquals(wrapper.state('counter'), -1);
  })
})
