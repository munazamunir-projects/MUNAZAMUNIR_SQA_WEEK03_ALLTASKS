*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}        http://127.0.0.1:5500/index.html
${BROWSER}    Chrome

*** Test Cases ***
Contact Form Test
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window

    Click Link    Contact

    Input Text    id=name    Munaza Munir
    Input Text    id=email    munaza@gmail.com
    Input Text    id=message    Testing Robot Framework

    Scroll Element Into View    id=submitBtn
    Sleep    1s

    Click Button    id=submitBtn

    Element Should Be Visible    id=successMessage

    Sleep    3s

    Close Browser