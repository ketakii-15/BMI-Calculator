const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiResult = document.getElementById('result');

// Define the 5th and 95th percentiles
const fifthPercentile = 15; // This is just a placeholder value. You should use a library to get the actual 5th and 95th percentiles for the user's age and sex.
const ninetyFifthPercentile = 21; // This is just a placeholder value. You should use a library to get the actual 5th and 95th percentiles for the user's age and sex.

document.getElementById('calculate-bmi').addEventListener('click', () => {
  const age = ageInput.value;
  const height = heightInput.value / 100; // Convert cm to m
  const weight = weightInput.value;

  // Calculate BMI using the appropriate formula for the age group
  let bmi;
  if (age < 2) {
    bmi = weight / (height * height); // BMI for infants and toddlers
  } else if (age < 20) {
    bmi = weight / (height * height); // BMI for children and adolescents
  } else {
    bmi = weight / (height * height); // BMI for adults
  }

  // Calculate BMI percentile
  const bmiPercentile = (bmi - fifthPercentile) / (ninetyFifthPercentile - fifthPercentile) * 100;

  // Get BMI percentile categories
  const bmiPercentileCategories = {
    'underweight': {
      label: 'Underweight',
      minPercentile: 0,
      maxPercentile: 5,
    },
    'healthy weight': {
      label: 'Healthy weight',
      minPercentile: 5,
      maxPercentile: 85,
    },
    'overweight': {
      label: 'Overweight',
      minPercentile: 85,
      maxPercentile: 95,
    },
    'obese': {
      label: 'Obese',
      minPercentile: 95,
      maxPercentile: 100,
    },
  };

  // Determine BMI percentile category
  let bmiPercentileCategory;
  for (const category in bmiPercentileCategories) {
    const bmiPercentileCategoryData = bmiPercentileCategories[category];
    if (bmiPercentile >= bmiPercentileCategoryData.minPercentile && bmiPercentile <= bmiPercentileCategoryData.maxPercentile) {
      bmiPercentileCategory = category;
      break;
    }
  }

  // Display BMI result
  bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}, which is considered ${bmiPercentileCategory}.`;
});
