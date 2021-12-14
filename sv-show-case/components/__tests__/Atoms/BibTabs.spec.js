/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibTabs from "~/../bib-shared/components/Atoms/BibTabs"; 


const factory = () => {
  return shallowMount(BibTabs, {
          propsData: {
            tabs: ['tab1','tab2','tab3'],
            value: "tab1"
      }
  });
};

describe("Bib Tabs", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});