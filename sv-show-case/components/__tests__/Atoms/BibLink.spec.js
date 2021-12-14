/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils";
import BibLink from "~/../bib-shared/components/Atoms/BibLink"; 


const factory = () => {
  return shallowMount(BibLink, {
          propsData: {
            label: 'Link',
            to: '#',
            variant: 'success'
      }
  });
};

describe("Bib Link", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});