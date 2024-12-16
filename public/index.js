"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {

  }

  /**
   * Checks the response status, throws error if not okay.
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Finds the element with the specified ID attribute.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Creates new element with given name.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Finds all elements that matches the CSS selector.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Finds first element that matches the CSS selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();