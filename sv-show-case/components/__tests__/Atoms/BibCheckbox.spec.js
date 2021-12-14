/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibCheckbox from "~/../bib-shared/components/Atoms/BibCheckbox"; 


const factory = () => {
  return shallowMount(BibCheckbox, {
        propsData: {
          value: 'checked'
      }
  });
};

describe("Bib Checkbox", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});