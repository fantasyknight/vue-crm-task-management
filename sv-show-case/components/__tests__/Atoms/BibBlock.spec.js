/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibBlock from "~/../bib-shared/components/Atoms/BibBlock"; 


const factory = () => {
  return shallowMount(BibBlock, {
     propsData: {
      variant: 'dark',
      size: 'md'
    }
  });
};

describe("Bib Block", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});