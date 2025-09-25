import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section>
            <div className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-3xl font-bold" style={{ color: 'black' }}>Ready to Transform Your Building Project?</h2>
                        <p className="text-base max-w-3xl mx-auto" style={{ color: '#565656' }}>
                            Experience premium quality and innovative solutions that enhance your building&rsquo;s performance, comfort, and aesthetic appeal.
                            Our expert team is ready to bring your vision to life with professional consultation and tailored solutions for your specific project needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}