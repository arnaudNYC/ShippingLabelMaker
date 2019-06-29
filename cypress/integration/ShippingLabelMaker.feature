Feature: Shipping Label Maker

  Scenario: Entering a sender address
    Given I am a logged in user
    When I enter a "from" address
    Then I should see the "Next" button enabled

  Scenario: Entering a receiver address
    Given I am a logged in user
    When I enter a "from" address
    And I click the "Next" button
    And I enter a "to" address
    Then I should see the "Next" button enabled

  Scenario: Entering a weight
    Given I am a logged in user
    When I enter a "from" address
    And I click the "Next" button
    And I enter a "to" address
    And I click the "Next" button
    And I enter a weight of "10"
    Then I should see the "Next" button enabled

  Scenario: Entering a shipping option
    Given I am a logged in user
    When I enter a "from" address
    And I click the "Next" button
    And I enter a "to" address
    And I click the "Next" button
    And I enter a weight of "10"
    And I click the "Next" button
    And I choose the "Ground" shipping option
    Then I should see the "Next" button enabled

  Scenario: Confirmation screen
    Given I am a logged in user
    When I enter a "from" address
    And I click the "Next" button
    And I enter a "to" address
    And I click the "Next" button
    And I enter a weight of "10"
    And I click the "Next" button
    And I choose the "Ground" shipping option
    And I click the "Next" button
    Then I should see the "Confirm" button enabled

  Scenario: Cost for ground shipping
    Given I am a logged in user
    When I enter a "from" address
    And I click the "Next" button
    And I enter a "to" address
    And I click the "Next" button
    And I enter a weight of "10"
    And I click the "Next" button
    And I choose the "Ground" shipping option
    And I click the "Next" button
    And I click the "Confirm" button
    Then I should see the shipping label with a price of "$4.00"

  Scenario: Cost for priority shipping
    Given I am a logged in user
    When I enter a "from" address
    And I click the "Next" button
    And I enter a "to" address
    And I click the "Next" button
    And I enter a weight of "10"
    And I click the "Next" button
    And I choose the "Priority" shipping option
    And I click the "Next" button
    And I click the "Confirm" button
    Then I should see the shipping label with a price of "$6.00"