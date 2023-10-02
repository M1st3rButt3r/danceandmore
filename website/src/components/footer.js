export default function Footer() {
    return (
        <div className="bg-gray-800 w-full h-auto text-white py-16 px-16 flex justify-center z-50">
            <div className="w-full max-w-4xl">
                <div className="flex flex-wrap gap-8 justify-between md:flex-row flex-col w-full mb-16 md:text-left text-center">
                    <div>
                        <p className="font-semibold text-xl">Kontakt</p>
                        <ul>
                            <li>Kontaktdaten</li>
                            <li>Kontaktformular</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">Social Media</p>
                        <ul>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">Rechtliches</p>
                        <ul>
                            <li>Impressum</li>
                            <li>Datenschutz</li>
                            <li>Haftungsauschluss</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">Weiteres</p>
                        <ul>
                            <li>Intern</li>
                        </ul>
                    </div>
                </div>
                <p className="italic text-sm">Alle Inhalte, insbesondere Texte, Fotografien und Grafiken sind urheberrechtlich geschützt. Alle Rechte, einschließlich der Vervielfältigung, Veröffentlichung, Bearbeitung und Übersetzung, bleiben vorbehalten.</p>
            </div>
        </div>
      
    )
  }
  