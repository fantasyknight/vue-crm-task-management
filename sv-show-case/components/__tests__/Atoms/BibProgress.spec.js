/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibProgress from "~/../bib-shared/components/Atoms/BibProgress"; 


const factory = () => {
  return shallowMount(BibProgress, {
        propsData: {
          variant: 'success'
      }
  });
};

describe("Bib Progress", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});