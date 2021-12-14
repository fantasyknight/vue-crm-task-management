/**
 * @jest-environment jsdom
 */

import { shallowMount, mount } from "@vue/test-utils";
import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 


const factory = () => {
  return mount(BibAvatar, {
     propsData: {
      img: '/img/avatar.png',
      size: 'md'
    }
  });
};

describe("Bib Avatar", () => {
  test("mounts properly", () => {
    const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot();
  });
});