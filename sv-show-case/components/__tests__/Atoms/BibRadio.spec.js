/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibRadio from "~/../bib-shared/components/Atoms/BibRadio"; 


const factory = () => {
  return shallowMount(BibRadio, {
          propsData: {
            value: 'true'
      }
  });
};

describe("Bib Radio", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});