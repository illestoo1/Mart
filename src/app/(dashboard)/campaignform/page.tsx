"use client";
import React, { useState } from "react";

interface FormData {
  campaignName: string;
  brand: string;
  channels: string[];
  targetCustomers: string;
  emailOnly: string;
  smsOnly: string;
  customerType: string;
  check: string;
  timeRange: string;
  runLength: string;
  rules: Rule[];
}

interface Rule {
  condition: string;
  metric: string;
  operator: string;
  value: string;
}

const CampaignForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    campaignName: "",
    brand: "",
    channels: [],
    targetCustomers: "",
    emailOnly: "",
    smsOnly: "",
    customerType: "All Customers",
    check: "Every hour",
    timeRange: "Today",
    runLength: "Active days",
    rules: [{ condition: "If", metric: "Spend", operator: "=", value: "100" }],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRuleChange = (
    index: number,
    field: keyof Rule,
    value: string
  ) => {
    const updatedRules = [...formData.rules];
    updatedRules[index][field] = value;
    setFormData({ ...formData, rules: updatedRules });
  };

  const addRule = () => {
    setFormData({
      ...formData,
      rules: [
        ...formData.rules,
        { condition: "And", metric: "", operator: "", value: "" },
      ],
    });
  };

  const removeRule = (index: number) => {
    const updatedRules = formData.rules.filter((_, i) => i !== index);
    setFormData({ ...formData, rules: updatedRules });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl space-y-8"
      >
        {/* Campaign Info */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            1. Campaign Info
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="campaignName"
              placeholder="Campaign name"
              value={formData.campaignName}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brands/Outlets"
              value={formData.brand}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="channels"
              placeholder="Channels (e.g., Email, SMS)"
              value={formData.channels.join(", ")}
              onChange={(e) =>
                handleInputChange({
                  ...e,
                  target: {
                    name: "channels",
                    value: e.target.value.split(","),
                  },
                })
              }
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Audience */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">2. Audience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="number"
              name="targetCustomers"
              placeholder="Target Customers"
              value={formData.targetCustomers}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="emailOnly"
              placeholder="Email Only"
              value={formData.emailOnly}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="smsOnly"
              placeholder="SMS Only"
              value={formData.smsOnly}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="customerType"
              value={formData.customerType}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option>All Customers</option>
              <option>New Customers</option>
              <option>Returning Customers</option>
            </select>
          </div>
        </section>

        {/* Time Manage */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            3. Time Manage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              name="check"
              value={formData.check}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option>Every hour</option>
              <option>Every day</option>
              <option>Every week</option>
            </select>
            <select
              name="timeRange"
              value={formData.timeRange}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <select
              name="runLength"
              value={formData.runLength}
              onChange={handleInputChange}
              className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option>Active days</option>
              <option>Weekends</option>
              <option>Specific dates</option>
            </select>
          </div>
        </section>

        {/* Create Rules */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            4. Create Rules
          </h2>
          <div className="space-y-4">
            {formData.rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-4">
                <select
                  value={rule.condition}
                  onChange={(e) =>
                    handleRuleChange(index, "condition", e.target.value)
                  }
                  className="border rounded-md p-3 w-1/6 focus:ring-2 focus:ring-blue-500"
                >
                  <option>If</option>
                  <option>And</option>
                  <option>Then</option>
                </select>
                <input
                  type="text"
                  placeholder="Metric"
                  value={rule.metric}
                  onChange={(e) =>
                    handleRuleChange(index, "metric", e.target.value)
                  }
                  className="border rounded-md p-3 w-1/4 focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={rule.operator}
                  onChange={(e) =>
                    handleRuleChange(index, "operator", e.target.value)
                  }
                  className="border rounded-md p-3 w-1/6 focus:ring-2 focus:ring-blue-500"
                >
                  <option>=</option>
                  <option>&gt;</option>
                  <option>&lt;</option>
                </select>
                <input
                  type="text"
                  placeholder="Value"
                  value={rule.value}
                  onChange={(e) =>
                    handleRuleChange(index, "value", e.target.value)
                  }
                  className="border rounded-md p-3 w-1/4 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeRule(index)}
                  className="text-red-500"
                >
                  ✖
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addRule}
              className="text-blue-500 underline text-sm"
            >
              + Add Rule
            </button>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4">
          <button
            type="button"
            className="px-5 py-2 bg-gray-300 rounded-md text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-orange-500 text-white rounded-md text-sm sm:text-base"
          >
            Save Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
