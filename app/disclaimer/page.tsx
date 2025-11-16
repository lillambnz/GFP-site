"use client"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Medical Disclaimer</h1>
        
        <div className="prose max-w-none space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Important Notice</h2>
            <p className="text-red-700">
              This disclaimer applies to all medical information provided by Gosnells Family Practice, 
              including but not limited to our website, consultations, and written materials.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">General Medical Information</h2>
            <p>
              The information provided on this website and during consultations is for general informational 
              purposes only. While our doctors and healthcare professionals strive to provide accurate and 
              up-to-date medical information, this information should not be considered as a substitute for 
              professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Not a Substitute for Professional Medical Advice</h2>
            <p>
              The content on this website is not intended to be a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider 
              with any questions you may have regarding a medical condition. Never disregard professional medical 
              advice or delay in seeking it because of something you have read on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Emergency Medical Situations</h2>
            <div className="bg-red-100 border border-red-300 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">In Case of Emergency</h3>
              <p className="text-red-700 mb-2">
                If you are experiencing a medical emergency, do not rely on information from this website. 
                Immediately call:
              </p>
              <ul className="list-disc ml-6 text-red-700 space-y-1">
                <li><strong>000</strong> for emergency services</li>
                <li><strong>13 HEALTH (13 43 25 84)</strong> for health advice</li>
                <li>Visit your nearest hospital emergency department</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Individual Medical Advice</h2>
            <p>
              Medical information provided during consultations is specific to the individual patient and their 
              circumstances at the time of the consultation. This advice may not be suitable for other individuals 
              or at different times. Each patient's medical situation is unique and requires individual assessment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accuracy and Completeness</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>While we endeavour to ensure information accuracy, medical knowledge and practices evolve continuously</li>
              <li>Information may become outdated or may contain errors or omissions</li>
              <li>We do not guarantee the accuracy, completeness, or usefulness of any information provided</li>
              <li>Medical research and treatment guidelines change regularly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Treatment Outcomes</h2>
            <p>
              Medicine is not an exact science, and treatment outcomes cannot be guaranteed. Individual responses 
              to treatment vary based on numerous factors including:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Patient's overall health condition</li>
              <li>Age and medical history</li>
              <li>Compliance with treatment recommendations</li>
              <li>Genetic factors</li>
              <li>Environmental and lifestyle factors</li>
              <li>Interaction with other medications or treatments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Second Opinions</h2>
            <p>
              Patients have the right to seek second opinions from other qualified medical professionals. 
              We encourage patients to discuss any concerns about their diagnosis or treatment plan with 
              their doctor or seek additional medical opinions when appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Medication Information</h2>
            <p>
              Information about medications, including dosages, side effects, and interactions, is provided 
              for educational purposes only. Always:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Follow your doctor's specific prescription instructions</li>
              <li>Read medication labels and patient information leaflets</li>
              <li>Consult your pharmacist for medication-specific questions</li>
              <li>Report any adverse reactions to your doctor immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links and Information</h2>
            <p>
              Our website may contain links to third-party websites or reference external medical resources. 
              We do not endorse or take responsibility for the content, accuracy, or reliability of these 
              external sources. Users access third-party content at their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Australian law, Gosnells Family Practice, its doctors, 
              staff, and affiliates disclaim all liability for any direct, indirect, incidental, or 
              consequential damages arising from:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use of information provided on this website</li>
              <li>Reliance on medical information without proper consultation</li>
              <li>Delays in seeking appropriate medical care</li>
              <li>Technical issues or interruptions to our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Registration</h2>
            <p>
              All medical practitioners at Gosnells Family Practice are registered with the Australian 
              Health Practitioner Regulation Agency (AHPRA) and maintain current professional registration. 
              Our practice adheres to the Medical Board of Australia's professional standards and ethical guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Disclaimer</h2>
            <p>
              This medical disclaimer may be updated periodically to reflect changes in medical practice, 
              legal requirements, or practice policies. The current version will always be available on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              If you have questions about this disclaimer or need clarification about medical information 
              provided by our practice, please contact us:
            </p>
            <p className="mt-4">
              <strong>Gosnells Family Practice</strong><br />
              23C, 2158 Albany Highway<br />
              Gosnells, WA 6110<br />
              Phone: (08) 6118 2788<br />
              Email: info@gosnellsfamilypractice.com.au
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-AU')}
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
            <p className="text-blue-800">
              <strong>Remember:</strong> When in doubt about your health, always consult with a qualified 
              healthcare professional. Your health and safety are our primary concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}