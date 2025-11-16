"use client"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Practice Information</h2>
            <p>
              Gosnells Family Practice is a medical practice located at 23C, 2158 Albany Highway, Gosnells, WA 6110. 
              We provide general practice medical services to patients in accordance with Australian healthcare standards 
              and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Appointment Terms</h2>
            <h3 className="text-xl font-medium mb-2">Booking</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Appointments can be made online through HotDoc or by calling (08) 6118 2788</li>
              <li>We recommend booking in advance to secure your preferred time</li>
              <li>Emergency appointments may be accommodated subject to availability</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">Cancellation Policy</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Please provide at least 2 hours notice for appointment cancellations</li>
              <li>Failure to attend without notice may result in a missed appointment fee</li>
              <li>Late arrivals may need to be rescheduled to avoid disrupting other patients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Payment is required at the time of consultation unless prior arrangements have been made</li>
              <li>We accept cash, EFTPOS, and Medicare where applicable</li>
              <li>Bulk billing is available for eligible patients (pension card holders, children under 16)</li>
              <li>Private fees apply for non-bulk billed consultations</li>
              <li>Workers compensation and third party insurance claims are processed separately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Patient Responsibilities</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate and complete medical history and current medications</li>
              <li>Bring Medicare card and relevant health insurance cards to appointments</li>
              <li>Inform us of any changes to contact details or medical conditions</li>
              <li>Follow prescribed treatment plans and medication instructions</li>
              <li>Treat staff and other patients with respect and courtesy</li>
              <li>Maintain confidentiality of other patients' information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Confidentiality</h2>
            <p>
              Your medical information is confidential and will be handled in accordance with the Privacy Act 1988 
              and Australian Privacy Principles. Please refer to our Privacy Policy for detailed information about 
              how we collect, use, and protect your personal health information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Medical Records</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Medical records are maintained electronically in secure systems</li>
              <li>Patients have the right to access their medical records upon request</li>
              <li>Records may be transferred to other healthcare providers with patient consent</li>
              <li>Medical records are retained in accordance with Australian medical record keeping requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Professional Standards</h2>
            <p>
              All doctors at Gosnells Family Practice are registered with the Australian Health Practitioner 
              Regulation Agency (AHPRA) and maintain current medical registration. Our practice is AGPAL 
              accredited, ensuring we meet national safety and quality standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Complaints and Feedback</h2>
            <p>
              We welcome feedback about our services. If you have concerns about your care, please speak with 
              the practice manager or your doctor. Formal complaints can be made to the Health and Disability 
              Services Complaints Office (HaDSCO) or the Australian Health Practitioner Regulation Agency (AHPRA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p>
              While we strive to provide the highest quality medical care, medicine is not an exact science. 
              Treatment outcomes cannot be guaranteed. Our liability is limited to the extent permitted by 
              Australian law, including the Competition and Consumer Act 2010 and relevant state legislation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p>
              These terms and conditions may be updated from time to time. Current terms will be available 
              on our website and at our practice. Continued use of our services constitutes acceptance of 
              any updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              <strong>Gosnells Family Practice</strong><br />
              23C, 2158 Albany Highway<br />
              Gosnells, WA 6110<br />
              Phone: (08) 6118 2788<br />
              Email: info@gosnellsfamilypractice.com.au
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-AU')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}