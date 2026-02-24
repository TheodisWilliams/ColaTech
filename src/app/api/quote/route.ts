import { NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, services, notes } = body

    // Validate required fields
    if (!name || !email || !phone || !services || services.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 1. Save to Strapi (if configured)
    let strapiSaved = false
    if (STRAPI_TOKEN) {
      try {
        const strapiResponse = await fetch(`${STRAPI_URL}/api/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRAPI_TOKEN}`,
          },
          body: JSON.stringify({
            data: {
              name,
              email,
              phone,
              address: address || '',
              services: services.join(', '),
              notes: notes || '',
              status: 'new',
              source: 'website',
              submittedAt: new Date().toISOString(),
            },
          }),
        })

        if (strapiResponse.ok) {
          strapiSaved = true
          console.log('Lead saved to Strapi successfully')
        } else {
          console.error('Failed to save to Strapi:', await strapiResponse.text())
        }
      } catch (strapiError) {
        console.error('Strapi save error:', strapiError)
      }
    }

    // 2. Send email notification
    // Using a simple fetch to a serverless email service (you can replace with SendGrid, Resend, etc.)
    let emailSent = false

    // Option A: Using Resend (recommended - install with: npm install resend)
    // Uncomment and configure when ready:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'ColaTech Website <noreply@colatechsolutions.com>',
        to: 'your-email@example.com', // YOUR EMAIL HERE
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address || 'Not provided'}</p>
          <p><strong>Services:</strong> ${services.join(', ')}</p>
          <p><strong>Notes:</strong></p>
          <p>${notes || 'No notes provided'}</p>
          <hr />
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      });
      emailSent = true;
    } catch (emailError) {
      console.error('Email send error:', emailError);
    }
    */

    // Option B: Simple console log for now (replace with real email service)
    console.log('📧 New quote request:', {
      name,
      email,
      phone,
      address,
      services: services.join(', '),
      notes,
      timestamp: new Date().toISOString(),
    })

    // For now, we'll mark as successful (you'll see the log in your terminal)
    emailSent = true

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Quote request received! We\'ll contact you within 24 hours.',
      strapiSaved,
      emailSent,
    })
  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again or call us directly.',
      },
      { status: 500 }
    )
  }
}
