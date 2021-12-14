/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibSwitch from "~/../bib-shared/components/Atoms/BibSwitch"; 


const factory = () => {
  return shallowMount(BibSwitch, {
          propsData: {
            checked: true
      }
  });
};

describe("Bib Switch", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});