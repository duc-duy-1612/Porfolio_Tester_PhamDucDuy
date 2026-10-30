export interface TestCaseItem {
  id: string;
  name: string;
  category: "Authentication & Account" | "Product Discovery & Pricing" | "Shopping Cart & Checkout" | "Product Interaction & Review" | "PC Builder System" | "Data Integrity & Spec";
  type: "Positive Flow" | "Negative & Boundary" | "Calculation Logic" | "State Persistence" | "Dynamic Data & DOM";
  stepsCount: number;
  preCondition: string;
  testSteps: string[];
  expectedResult: string;
  actualResult: string;
  status: "PASSED";
  automationTool: "Selenium IDE";
}

export const tncTestCases: TestCaseItem[] = [
  {
    id: "TC-01",
    name: "Verify Successful Login",
    category: "Authentication & Account",
    type: "Positive Flow",
    stepsCount: 19,
    preCondition: "User has a valid registered account on TNC Store and is in guest state.",
    testSteps: [
      "Navigate to Homepage (https://www.tncstore.vn/)",
      "Verify guest header state with executeScript",
      "Click Account icon and choose Login",
      "Input valid email and password credentials",
      "Click Submit Login button"
    ],
    expectedResult: "User is authenticated successfully, account name displayed in header, cookie session persisted.",
    actualResult: "User successfully logged in, header displays account greeting, session active.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-02",
    name: "Verify Successful Logout",
    category: "Authentication & Account",
    type: "Positive Flow",
    stepsCount: 15,
    preCondition: "User is currently authenticated in the system.",
    testSteps: [
      "Access authenticated account dashboard",
      "Hover on Account menu dropdown",
      "Click 'Đăng xuất' (Logout) button",
      "Verify URL redirect to homepage"
    ],
    expectedResult: "Session terminated, header reverts to guest 'Đăng nhập / Đăng ký' state.",
    actualResult: "Session cleared successfully, guest state restored across all tabs.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-03",
    name: "Verify Cart Quantity Updates",
    category: "Shopping Cart & Checkout",
    type: "Positive Flow",
    stepsCount: 18,
    preCondition: "At least one product added to shopping cart.",
    testSteps: [
      "Open shopping cart drawer / page",
      "Record current item quantity and subtotal",
      "Click '+' button to increment quantity by 1",
      "Wait for AJAX recalculation to complete"
    ],
    expectedResult: "Item quantity increments to 2, subtotal and grand total update dynamically.",
    actualResult: "Quantity updated to 2, total recalculated accurately without page reload.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-04",
    name: "Verify Empty Cart State After Removing All Items",
    category: "Shopping Cart & Checkout",
    type: "Positive Flow",
    stepsCount: 14,
    preCondition: "Cart contains exactly one product.",
    testSteps: [
      "Open cart view",
      "Click 'Xóa' (Remove) icon on the product line",
      "Confirm removal on browser confirmation prompt"
    ],
    expectedResult: "Product removed, cart shows empty state graphic and 'Giỏ hàng trống' notification.",
    actualResult: "Item removed immediately, empty cart placeholder displayed properly.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-05",
    name: "Verify Product Sorting by Price (Low to High)",
    category: "Product Discovery & Pricing",
    type: "Calculation Logic",
    stepsCount: 22,
    preCondition: "User is on a product catalog page with multiple items.",
    testSteps: [
      "Navigate to Laptop catalog",
      "Select sort dropdown option: 'Giá: Thấp đến Cao'",
      "Iterate through DOM price elements sequentially",
      "Compare price[i] <= price[i+1] across all rendered items"
    ],
    expectedResult: "Products ordered in strict ascending numerical price order.",
    actualResult: "All items sorted correctly from lowest to highest price value.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-06",
    name: "Verify Product Filtering Functionality by Brand",
    category: "Product Discovery & Pricing",
    type: "Positive Flow",
    stepsCount: 20,
    preCondition: "Catalog page with multi-brand products loaded.",
    testSteps: [
      "Open Graphic Cards (VGA) category",
      "Check brand filter checkbox 'ASUS'",
      "Wait for catalog list refresh",
      "Inspect product title and badge attributes of all results"
    ],
    expectedResult: "Every displayed product belongs to ASUS; non-ASUS products excluded.",
    actualResult: "100% of returned items match ASUS brand criteria.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-07",
    name: "Verify Consistency of Product Count",
    category: "Product Discovery & Pricing",
    type: "Dynamic Data & DOM",
    stepsCount: 19,
    preCondition: "Category page displays advertised total count header (e.g. 'Hiển thị 24 sản phẩm').",
    testSteps: [
      "Extract integer value from category header counter",
      "Count total child DOM cards matching selector .product-item",
      "Compare advertised count with rendered DOM node count"
    ],
    expectedResult: "Rendered product cards count matches advertised total count exactly.",
    actualResult: "DOM node count (24) matches header badge indicator (24).",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-08",
    name: "Verify Alert for Exceeding Maximum Purchase Limit",
    category: "Shopping Cart & Checkout",
    type: "Negative & Boundary",
    stepsCount: 16,
    preCondition: "Product has stock limit threshold (e.g., max 5 units/order).",
    testSteps: [
      "Navigate to product detail page",
      "Enter quantity value 9999 into input field",
      "Click 'Thêm vào giỏ hàng' (Add to Cart)"
    ],
    expectedResult: "System blocks submission and displays error toast: exceeds inventory limit.",
    actualResult: "Validation alert triggered, quantity auto-adjusted to maximum allowed stock.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-09",
    name: "Verify Accurate Calculation of Multi-item Cart Total",
    category: "Shopping Cart & Checkout",
    type: "Calculation Logic",
    stepsCount: 25,
    preCondition: "Cart contains 3 distinct items with different unit prices and quantities.",
    testSteps: [
      "Add Product A (qty: 2), Product B (qty: 1), Product C (qty: 3)",
      "Extract each item unit price and quantity via script",
      "Compute expected sum = Σ(unit_price * qty) + shipping_fee",
      "Extract grand total from cart summary footer and compare"
    ],
    expectedResult: "Displayed grand total equals mathematical sum of all line items.",
    actualResult: "Mathematical verification passed with zero cent rounding discrepancy.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-10",
    name: "Verify Change Password Failure with Incorrect Old Password",
    category: "Authentication & Account",
    type: "Negative & Boundary",
    stepsCount: 17,
    preCondition: "User logged into account dashboard.",
    testSteps: [
      "Navigate to 'Đổi mật khẩu' (Change Password) tab",
      "Input wrong current password 'WrongPass@123'",
      "Input valid new password and confirmation",
      "Click 'Lưu thay đổi' (Save)"
    ],
    expectedResult: "Password change rejected with error: 'Mật khẩu hiện tại không chính xác'.",
    actualResult: "System prevented update and highlighted current password field in red.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-11",
    name: "Verify Search Results Relevance by Exact Keyword",
    category: "Product Discovery & Pricing",
    type: "Positive Flow",
    stepsCount: 16,
    preCondition: "User is on any page with global search bar.",
    testSteps: [
      "Focus global search input",
      "Type search term: 'RTX 4070'",
      "Press Enter to view full results page",
      "Inspect titles of all returned cards"
    ],
    expectedResult: "All returned products contain 'RTX 4070' in name or description.",
    actualResult: "Search result set contains relevant GPU products matching keyword.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-12",
    name: "Verify Dynamic Search Suggestions Dropdown",
    category: "Product Discovery & Pricing",
    type: "Dynamic Data & DOM",
    stepsCount: 15,
    preCondition: "Search input has debounce autocomplete enabled.",
    testSteps: [
      "Type keyword 'bàn phím' slowly (300ms pause)",
      "Wait for autocomplete dropdown popup to render",
      "Verify suggestion list has > 0 items and thumbnail images"
    ],
    expectedResult: "Dropdown appears with live suggestions and direct links to products.",
    actualResult: "Autocomplete rendered 5 matching keyboard suggestions with prices.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-13",
    name: "Verify Data Persistence After Updating Account Profile",
    category: "Authentication & Account",
    type: "State Persistence",
    stepsCount: 21,
    preCondition: "User logged into account settings.",
    testSteps: [
      "Update display name to 'Pham Duc Duy QA' and phone number",
      "Click 'Cập nhật' (Update)",
      "Hard refresh page (Ctrl + F5)",
      "Verify persisted input field values"
    ],
    expectedResult: "New profile information persists in database and displays on reload.",
    actualResult: "Updated name and phone persisted correctly across page reloads.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-14",
    name: "Verify Cart Quantity Capping for Special Promotional Items",
    category: "Shopping Cart & Checkout",
    type: "Negative & Boundary",
    stepsCount: 18,
    preCondition: "Flash sale item restricted to 1 unit per customer.",
    testSteps: [
      "Add flash sale promotional item to cart",
      "Attempt to click '+' button or edit input value to 2",
      "Verify UI response"
    ],
    expectedResult: "System disables '+' button or resets value to 1 with warning message.",
    actualResult: "Quantity capped at 1; tooltip notification displayed properly.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-15",
    name: "Verify Internal Chat Widget Visibility & Toggle",
    category: "Product Interaction & Review",
    type: "Dynamic Data & DOM",
    stepsCount: 14,
    preCondition: "Customer support chat widget integrated on all pages.",
    testSteps: [
      "Click floating support chat icon at bottom-right",
      "Verify chat modal iframe expands",
      "Click minimize/close button"
    ],
    expectedResult: "Chat window opens smoothly and closes without UI obstruction.",
    actualResult: "Widget toggles open/close states with correct z-index overlay.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-16",
    name: "Verify Mandatory Field Validations on Product Review Form",
    category: "Product Interaction & Review",
    type: "Negative & Boundary",
    stepsCount: 20,
    preCondition: "User on product review section.",
    testSteps: [
      "Leave 'Họ tên', 'Đánh giá sao', and 'Nội dung' blank",
      "Click 'Gửi đánh giá' (Submit Review)",
      "Inspect form error states"
    ],
    expectedResult: "Form submission prevented; required validation warnings highlighted.",
    actualResult: "All mandatory fields highlighted in red with explicit error messages.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-17",
    name: "Verify Successful Product Review Submission with Valid Data",
    category: "Product Interaction & Review",
    type: "Positive Flow",
    stepsCount: 22,
    preCondition: "User on product detail page review form.",
    testSteps: [
      "Fill valid full name, email, rating (5 stars), and review text",
      "Click 'Gửi đánh giá'",
      "Verify success notification"
    ],
    expectedResult: "Success alert shown: 'Đánh giá của bạn đã được ghi nhận và chờ duyệt'.",
    actualResult: "Review submitted successfully, toast feedback appeared.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-18",
    name: "Verify Dynamic Product Image Gallery on Variant Selection",
    category: "Product Interaction & Review",
    type: "Dynamic Data & DOM",
    stepsCount: 17,
    preCondition: "Product has multiple color variants (e.g. Black, White).",
    testSteps: [
      "Record default image src",
      "Click color swatch variant 'White'",
      "Verify main gallery image src updates"
    ],
    expectedResult: "Main showcase image changes dynamically to match selected variant color.",
    actualResult: "Image URL updated to white variant thumbnail seamlessly.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-19",
    name: "Verify 'Build PC' Redirection & Component Initialization",
    category: "PC Builder System",
    type: "Positive Flow",
    stepsCount: 16,
    preCondition: "User on Homepage navigation bar.",
    testSteps: [
      "Click 'Xây dựng cấu hình PC' in header menu",
      "Verify target URL is /build-pc",
      "Verify table renders 10 hardware slots (CPU, Main, RAM, VGA, SSD...)"
    ],
    expectedResult: "Page navigates to PC Builder tool with all component slots available.",
    actualResult: "All 10 hardware slots initialized with empty state and 'Chọn' buttons.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-20",
    name: "Verify Dynamic Price Deduction on Component Removal in PC Builder",
    category: "PC Builder System",
    type: "Calculation Logic",
    stepsCount: 24,
    preCondition: "PC configuration has CPU ($300) and RAM ($100) added (Total: $400).",
    testSteps: [
      "Record baseline Total: 400",
      "Click trash icon to remove RAM ($100)",
      "Wait for live DOM update",
      "Verify new Total = Baseline - 100"
    ],
    expectedResult: "Total dynamically recalculates to $300 immediately.",
    actualResult: "Formula (Total = Initial - Removed) validated with 100% accuracy.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-21",
    name: "Validate Min-Max Price Filter Boundary Sliders",
    category: "Product Discovery & Pricing",
    type: "Negative & Boundary",
    stepsCount: 21,
    preCondition: "Catalog page with price slider range filter.",
    testSteps: [
      "Set Min Price = 10,000,000 VND and Max Price = 20,000,000 VND",
      "Apply filter",
      "Verify all displayed product prices satisfy 10M <= price <= 20M"
    ],
    expectedResult: "Only products within the [Min, Max] closed interval are returned.",
    actualResult: "Boundary check passed: zero items outside price bounds.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-22",
    name: "Verify Cart Item Accumulation on Repeated Additions",
    category: "Shopping Cart & Checkout",
    type: "Positive Flow",
    stepsCount: 19,
    preCondition: "Product X is already in cart with quantity = 1.",
    testSteps: [
      "Return to Product X page",
      "Click 'Thêm vào giỏ hàng' again",
      "Open shopping cart"
    ],
    expectedResult: "Cart does not duplicate product row; quantity increments from 1 to 2.",
    actualResult: "Single row retained with quantity = 2 and subtotal doubled.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-23",
    name: "Verify Total Price Deduction After Removing Specific Item",
    category: "Shopping Cart & Checkout",
    type: "Calculation Logic",
    stepsCount: 22,
    preCondition: "Cart has 2 products: A ($50) and B ($70). Grand Total = $120.",
    testSteps: [
      "Click remove button on Product A",
      "Confirm prompt",
      "Verify updated Grand Total"
    ],
    expectedResult: "Grand total deducts exactly $50, remaining balance = $70.",
    actualResult: "Total updated to $70 instantly without rounding error.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-24",
    name: "Discount Logic & Percentage Formula Validation",
    category: "Product Discovery & Pricing",
    type: "Calculation Logic",
    stepsCount: 23,
    preCondition: "Product has original price and sale price displayed.",
    testSteps: [
      "Extract Original Price (P_orig) and Sale Price (P_sale)",
      "Extract displayed discount badge percent (%_disp)",
      "Compute expected % = Math.ceil(((P_orig - P_sale) / P_orig) * 100)",
      "Compare calculated % with displayed badge"
    ],
    expectedResult: "Displayed percentage matches mathematical formula with ceil rounding.",
    actualResult: "Formula verified across all discounted catalog cards.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-25",
    name: "Verify Build PC Total Price After In-place Component Editing",
    category: "PC Builder System",
    type: "Calculation Logic",
    stepsCount: 24,
    preCondition: "PC Builder has CPU Core i5 ($200) selected.",
    testSteps: [
      "Click 'Thay đổi' (Change) on CPU slot",
      "Select CPU Core i7 ($350)",
      "Verify old CPU replaced and total incremented by delta +$150"
    ],
    expectedResult: "Slot updated to Core i7; total adjusted accurately by price difference.",
    actualResult: "In-place replacement verified, total recalculated properly.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-26",
    name: "Verify Automatic Promotional Discount for Complete PC Configuration",
    category: "PC Builder System",
    type: "Calculation Logic",
    stepsCount: 26,
    preCondition: "PC Builder requires 8 core components to qualify for bundle discount.",
    testSteps: [
      "Add all 8 required hardware components",
      "Verify bundle promo banner activates",
      "Inspect discount voucher line item applied in summary"
    ],
    expectedResult: "Complete PC discount of 500,000 VND automatically deducted from total.",
    actualResult: "Discount rule triggered on 8th component addition, total updated.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-27",
    name: "Verify Search & Combined Filter for 'Laptop ASUS'",
    category: "Product Discovery & Pricing",
    type: "Positive Flow",
    stepsCount: 21,
    preCondition: "User on global search.",
    testSteps: [
      "Search keyword 'Laptop'",
      "On results page, apply Brand filter = 'ASUS' and Screen = '15.6 inch'",
      "Verify intersect of all filters"
    ],
    expectedResult: "Returned items are ASUS laptops with 15.6 inch display exclusively.",
    actualResult: "Compound filter logic (Search AND Brand AND Spec) verified.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-28",
    name: "Verify Reset Configuration in PC Builder",
    category: "PC Builder System",
    type: "Positive Flow",
    stepsCount: 17,
    preCondition: "User has configured multiple parts in PC Builder.",
    testSteps: [
      "Click 'Làm mới' (Reset Configuration) button",
      "Confirm reset dialog",
      "Inspect all slots and total price"
    ],
    expectedResult: "All slots cleared back to empty state; Total Price reset to 0 VND.",
    actualResult: "Full configuration cleared, state reset cleanly without orphan cookies.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-29",
    name: "Verify Cart Data Persistence After Guest-to-User Authentication",
    category: "Shopping Cart & Checkout",
    type: "State Persistence",
    stepsCount: 25,
    preCondition: "User is in guest state with 2 items in cart.",
    testSteps: [
      "Add 2 products to cart while unauthenticated",
      "Navigate to Login page",
      "Authenticate with valid user credentials",
      "Return to shopping cart"
    ],
    expectedResult: "Guest cart items are merged into authenticated user cart without loss.",
    actualResult: "Guest cart items retained seamlessly post-login.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  },
  {
    id: "TC-30",
    name: "Verify Data Integrity: Product Name vs. Detailed Specifications",
    category: "Data Integrity & Spec",
    type: "Dynamic Data & DOM",
    stepsCount: 28,
    preCondition: "Product title contains core hardware specs (e.g. '16GB RAM, 512GB SSD').",
    testSteps: [
      "Extract product title text with Regex parsing",
      "Extract RAM ('16GB') and SSD ('512GB') specifications from title",
      "Navigate to 'Thông số kỹ thuật' (Specification Table) tab",
      "Extract RAM and Storage table rows and normalize strings",
      "Compare normalized specification values"
    ],
    expectedResult: "Hardware specs declared in product title match technical table exactly.",
    actualResult: "Regex extraction and cross-view DOM validation passed with zero mismatch.",
    status: "PASSED",
    automationTool: "Selenium IDE"
  }
];
