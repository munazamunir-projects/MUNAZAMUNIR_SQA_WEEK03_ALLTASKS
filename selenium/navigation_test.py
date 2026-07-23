from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Open Chrome
driver = webdriver.Chrome()

# Maximize browser
driver.maximize_window()

# Open Website
driver.get("http://127.0.0.1:5500/index.html")

# Verify Page Title
assert "Munaza Munir" in driver.title

# Wait for page to load
time.sleep(2)

# Click Contact navigation link
contact_link = driver.find_element(By.LINK_TEXT, "Contact")
contact_link.click()

# Wait for scrolling
time.sleep(2)

# Verify Contact section exists
contact_section = driver.find_element(By.ID, "contact")
assert contact_section.is_displayed()

print("Scenario 1 Passed Successfully!")

# Wait before closing
time.sleep(3)

# Close browser
driver.quit()