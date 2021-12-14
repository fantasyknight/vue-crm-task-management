/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibInput from "~/../bib-shared/components/Atoms/BibInput"; 


const factory = () => {
  return shallowMount(BibInput, {
          propsData: {
            placeholder:"Enter text..",
            text: true
      }
  });
};

describe("Bib Input", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});