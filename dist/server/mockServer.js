'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = __importDefault(require('express'));
const express_validator_1 = require('express-validator');
const app = (0, express_1.default)();
const port = 3000;
// Add JSON support
app.use(express_1.default.json());
// Mock API to get form
app.get('/api/form', (req, res) => {
  res.json({
    email: 'test@example.com',
    name: 'Test User',
  });
});
// Mock API to submit form with validationHelper
app.post(
  '/api/submit',
  [
    (0, express_validator_1.body)('email')
      .isEmail()
      .withMessage('Invalid email address'),
    (0, express_validator_1.body)('name')
      .isLength({min: 1})
      .withMessage('Name is required'),
  ],
  (req, res) => {
    // Handle validationHelper results
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    const {email, name} = req.body;
    // Logic for processing can be added here
    res.json({
      message: 'Form submitted successfully!',
      data: {email, name},
    });
  },
);
app.listen(port, () => {
  console.log(`Mock server running on http://localhost:${port}`);
});
