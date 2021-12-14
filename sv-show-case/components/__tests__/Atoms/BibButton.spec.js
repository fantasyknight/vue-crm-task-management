/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 


const factory = () => {
  return shallowMount(BibButton, {
     propsData: {
          label: 'Button',
          size: 'md',
          to: '#',
          variant: 'success'
    }
  });
};

describe("Bib Button", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});