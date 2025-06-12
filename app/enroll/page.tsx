"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  FileText,
  Upload,
  Plus,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function EnrollPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [degreeCount, setDegreeCount] = useState(1);
  const degreeRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleAddDegree = () => {
    const lastInput = degreeRefs.current[degreeCount - 1];
    if (!lastInput || !lastInput.files?.length) {
      setMessage("Please upload the current degree before adding another.");
      setMessageType("error");
      return;
    }
    setMessage("");
    setMessageType("");
    if (degreeCount < 5) setDegreeCount(degreeCount + 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong");

      setMessage(
        "Enrollment submitted successfully! We will review your application and get back to you soon."
      );
      setMessageType("success");
      form.reset();
      setDegreeCount(1);
      degreeRefs.current = [];
    } catch (error: any) {
      setMessage(error.message);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Student Enrollment
          </h1>
          <p className="text-slate-600 max-w-md mx-auto">
            Complete your enrollment by providing your personal information and
            required documents.
          </p>
        </div>
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl text-slate-800">
              Enrollment Application
            </CardTitle>
            <CardDescription>
              Please fill out all required fields and upload the necessary
              documents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    Personal Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-slate-700"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-slate-700"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    Academic Documents
                  </h3>
                  <div className="ml-auto">PDF Only</div>
                </div>
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-slate-700">
                    Degree Certificates * (Maximum 5)
                  </Label>
                  <div className="space-y-3">
                    {Array.from({ length: degreeCount }).map((_, i) => (
                      <div key={i} className="relative">
                        <div className="flex items-center gap-3 p-4 border-2 border-dashed border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
                          <Upload className="w-5 h-5 text-slate-400" />
                          <div className="flex-1">
                            <Input
                              name="degrees"
                              type="file"
                              accept="application/pdf"
                              required={i === 0}
                              ref={(el) => {
                                degreeRefs.current[i] = el;
                              }}
                              className="border-0 p-0 h-auto file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                          </div>
                          <div className="text-xs">Degree {i + 1}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {degreeCount < 5 && (
                    <Button
                      type="button"
                      onClick={handleAddDegree}
                      variant="outline"
                      className="w-full border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Another Degree
                    </Button>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    Identity Verification
                  </h3>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="identity"
                    className="text-sm font-medium text-slate-700"
                  >
                    Identity Proof Document * (Passport, Driver's License, etc.)
                  </Label>
                  <div className="flex items-center gap-3 p-4 border-2 border-dashed border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
                    <Upload className="w-5 h-5 text-slate-400" />
                    <Input
                      id="identity"
                      name="identity"
                      type="file"
                      accept="application/pdf"
                      required
                      className="border-0 p-0 h-auto file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
              </div>
              {message && (
                <Alert
                  className={
                    messageType === "success"
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }
                >
                  {messageType === "success" ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription
                    className={
                      messageType === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }
                  >
                    {message}
                  </AlertDescription>
                </Alert>
              )}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Application...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Enrollment Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
