import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import db from "@/database";

export default function PackagesForm() {
  const [ramvalue, setRamValue] = useState('');
  const [cpuvalue, setCpuValue] = useState('');
  const [storagevalue, setStorageValue] = useState('');
  const [slotsvalue, setSlotsValue] = useState('');
  const [paymentsvalue, setPaymentsValue] = useState(false);
  const [currencyvalue, setCurrencyValue] = useState('');
  const [paypalintvalue, setPaypalIntValue] = useState(false);
  const [paypalemailvalue, setPaypalEmailValue] = useState('');
  const [ramph, setRamPh] = useState('');
  const [diskph, setDiskPh] = useState('');
  const [cpuph, setCpuPh] = useState('');
  const [slotph, setSlotPh] = useState('');
  const [inputstarttoken, setInputStartToken] = useState('');

  useEffect(() => {
    async function fetchConfig() {
      const config_website = await db.get("config_website");
      const restype = config_website?.resource_type;
      
      if (restype === "GB") {
        setRamPh('1 GB');
        setDiskPh('2 GB');
        setCpuPh('1 Core');
        setSlotPh('1 Slot');
      } else {
        setRamPh('1024 MB');
        setDiskPh('2048 MB');
        setCpuPh('100%');
        setSlotPh('1 slot');
      }

      const config_packages = await db.get("config_packages") || {};
      setRamValue(config_packages.packages?.list?.["default"]?.ram ?? '');
      setCpuValue(config_packages.packages?.list?.["default"]?.cpu ?? '');
      setStorageValue(config_packages.packages?.list?.["default"]?.disk ?? '');
      setSlotsValue(config_packages.packages?.list?.["default"]?.servers ?? '');
      setCurrencyValue(config_packages.payments?.currency ?? '');
      setPaypalEmailValue(config_packages.payments?.paypal?.email ?? '');
    }

    fetchConfig();
  }, []);

  return (
    <form className="grid grid-cols-1" action="/api/installer/packages" method="POST">
      <input type="hidden" value={inputstarttoken} name="inputtoken" />
      <h1 className="text-center text-2xl font-bold">Step 2 - Package and Payment Settings</h1>
      <h1 className="text-center text-xl font-bold">Default Package</h1>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">RAM: </label>
        <Input
          required
          value={ramvalue}
          onChange={(e) => setRamValue(e.target.value)}
          name="ram"
          type="number"
          placeholder={ramph}
        />
      </div>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">CPU: </label>
        <Input
          required
          value={cpuvalue}
          onChange={(e) => setCpuValue(e.target.value)}
          name="cpu"
          type="number"
          placeholder={cpuph}
        />
      </div>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">Storage: </label>
        <Input
          required
          value={storagevalue}
          onChange={(e) => setStorageValue(e.target.value)}
          name="storage"
          type="number"
          placeholder={diskph}
        />
      </div>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">Server slots: </label>
        <Input
          required
          value={slotsvalue}
          onChange={(e) => setSlotsValue(e.target.value)}
          name="slots"
          type="number"
          placeholder={slotph}
        />
      </div>

      <h2 className="text-center text-xl font-bold">Payment Settings</h2>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">Enable Payment Settings: </label>
        <Checkbox
          name="payments"
        />
      </div>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">Currency Short Code: </label>
        <Input
          value={currencyvalue}
          onChange={(e) => setCurrencyValue(e.target.value)}
          name="currency_code"
          maxLength={3}
          placeholder="USD"
        />
      </div>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">Enable PayPal integration: </label>
        <Checkbox
          name="paypal_integration"
        />
      </div>

      <div className="w-full grid grid-cols-2 mb-1">
        <label className="ml-1">PayPal Email: </label>
        <Input
          value={paypalemailvalue}
          onChange={(e) => setPaypalEmailValue(e.target.value)}
          name="paypal_email"
          placeholder="email@example.com"
        />
      </div>

      <input hidden type="text" name="token" required value={inputstarttoken} />
      
      <Button type="submit" className="mt-2">
        Next
      </Button>
    </form>
  );
}
