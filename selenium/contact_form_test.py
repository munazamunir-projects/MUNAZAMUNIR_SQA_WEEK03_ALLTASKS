from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Open Chrome
driver = webdriver.Chrome()

# Maximize browser
driver.maximize_window()

# Open Website
driver.get("http://127.0.0.1:5500/index.html")

# Wait for page load
time.sleep(2)

# Scroll to Contact section
driver.find_element(By.LINK_TEXT, "Contact").click()

time.sleep(2)

# Fill Name
driver.find_element(By.ID, "name").send_keys("Munaza Munir")

# Fill Email
driver.find_element(By.ID, "email").send_keys("munaza@gmail.com")

# Fill Message
driver.find_element(By.ID, "message").send_keys("Testing contact form using Selenium.")

# Click Submit
submit_button = driver.find_element(By.ID, "submitBtn")

driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", submit_button)

time.sleep(1)

submit_button.click()

# Verify Success Message
success = driver.find_element(By.ID, "successMessage")

assert success.is_displayed()

print("Scenario 2 Passed Successfully!")

time.sleep(3)

driver.quit()