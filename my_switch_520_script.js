// ==UserScript==
// @name        Switch520 综合脚本
// @namespace   Violentmonkey Scripts
// @match       https://*.gamer520.com/*
// @grant       none
// @version     1.1
// @author      h0zr
// @description 2024/7/17 07:00:07
// @icon        https://www.google.com/s2/favicons?sz=64&domain=gamer520.com
// @homepageURL https://github.com/h0zr/switch520-script/tree/main
// @license MIT
// @downloadURL https://github.com/h0zr/switch520-script/blob/main/my_switch_520_script.js
// @updateURL https://github.com/h0zr/switch520-script/blob/main/my_switch_520_script.js
// ==/UserScript==

(function() {
    'use strict';

    function clickButtonByCSS(selector) {
        const button = document.querySelector(selector);
        if (button) {
            button.click();
        }
    }

    setTimeout(() => clickButtonByCSS('.swal2-close'), 1000);

// --------------------------------------------------------------------------------------------------

    document.addEventListener('click', function() {
        setInterval(function() {
            clickButtonByCSS('.swal2-confirm');
        }, 500);
    });

// --------------------------------------------------------------------------------------------------

    function getPasswordFromSelector(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const text = element.innerText;
            const match = text.match(/密码保护：(\w+)/);
            return match ? match[1] : null;
        } else {
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
