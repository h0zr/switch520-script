// ==UserScript==
// @name        Switch520 跳过广告，自动填充密码
// @namespace   Violentmonkey Scripts
// @match       https://*.gamer520.com/*
// @grant       none
// @version     1.0
// @author      h0zr
// @description 2024/7/17 07:00:07
// @icon        https://www.google.com/s2/favicons?sz=64&domain=gamer520.com
// ==/UserScript==

(function() {
    'use strict';

    function clickButtonByCSS(selector) {
        const button = document.querySelector(selector);
        if (button) {
            button.click();
            console.log(`Button clicked using CSS selector: ${selector}`);
        } else {
            console.log(`Button not found using CSS selector: ${selector}`);
        }
    }

    setTimeout(() => clickButtonByCSS('.swal2-close'), 1000);

// --------------------------------------------------------------------------------------------------

    function getPasswordFromSelector(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const text = element.innerText;
            const match = text.match(/密码保护：(\w+)/);
            return match ? match[1] : null;
        } else {
            console.log(`Element not found for selector: ${selector}`);
            return null;
        }
    }

    function findPasswordInput() {
        return document.querySelector(`input[name='post_password']`);
    }

    function findSubmitButton() {
        return document.querySelector(`input[value='提交']`);
    }

    function main() {
        const selector = '.entry-title';
        const password = getPasswordFromSelector(selector);
        if (password) {
            console.log(`Extracted password: ${password}`);
            const passwordInput = findPasswordInput();
            const submitButton = findSubmitButton();
            if (passwordInput && submitButton) {
                passwordInput.value = password;
                submitButton.click();
            }
        }
    }

    main();

})();